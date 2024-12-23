import React, { useState } from 'react';
import WalletConnect from '../components/WalletConnect';
import Balance from '../components/Balance';
import BurnGala from '../components/BurnGala';
import TransferGala from '../components/TransferGala';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [metamaskClient, setMetamaskClient] = useState(null);

  const handleWalletConnect = (address, connected, client) => {
    setWalletAddress(address);
    setIsConnected(connected);
    setMetamaskClient(client);
  };

  return (
    <div>
      <h1>GalaChain Burn dApp</h1>
      <WalletConnect onConnect={handleWalletConnect} />
      {isConnected ? (
        <>
          <Balance walletAddress={walletAddress} />
          <BurnGala walletAddress={walletAddress} metamaskClient={metamaskClient} />
          <TransferGala walletAddress={walletAddress} metamaskClient={metamaskClient} />
        </>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
}
