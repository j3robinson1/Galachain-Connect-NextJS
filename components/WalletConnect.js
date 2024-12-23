import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserConnectClient } from '@gala-chain/connect';

const WalletConnect = ({ onConnect }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [metamaskClient, setMetamaskClient] = useState(null);

  useEffect(() => {
    const client = new BrowserConnectClient();
    setMetamaskClient(client);
  }, []);

  const connectWallet = async () => {
    try {
      await metamaskClient.connect();
      let address = await metamaskClient.ethereumAddress; // Make sure this is correct
      if (address.startsWith('0x')) {
        address = "eth|" + address.slice(2);
      }
      setWalletAddress(address);
      onConnect(address, true, metamaskClient); // Include metamaskClient in the callback
      await checkRegistration(address);
    } catch (err) {
      console.error('Error connecting wallet:', err);
      onConnect('', false, null);
    }
  };

  const checkRegistration = async (address) => {
    if (!address) return;
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_GATEWAY_API}/GetPublicKey`, {
        user: address
      });
      setIsRegistered(!!response.data.Data);
    } catch (err) {
      console.log('User is not registered', err);
      setIsRegistered(false);
    }
  };

  const registerUser = async () => {
    try {
      const publicKey = await metamaskClient.getPublicKey();
      const response = await axios.post(`${process.env.NEXT_PUBLIC_GALASWAP_API}/CreateHeadlessWallet`, {
        publicKey: publicKey.publicKey
      });
      setIsRegistered(true);
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <div className="wallet-connect">
      {!walletAddress ? (
        <button onClick={connectWallet} className="button">Connect Wallet</button>
      ) : (
        <div>
          <p className="wallet-address">Connected: {walletAddress}</p>
          {!isRegistered && <button onClick={registerUser} className="button">Register</button>}
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
