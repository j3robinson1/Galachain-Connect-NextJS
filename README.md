# Galachain Connect NextJS

A Next.js-based web application designed to showcase achievements and connect users' wallets for interactions within the GalaChain ecosystem.

## Prerequisites

- Node.js (v14 or later)
- npm, yarn, or pnpm
- MetaMask or compatible Web3 wallet

## Setup and Installation

### Clone the repository

```bash
git clone https://github.com/j3robinson1/Galachain-Connect-NextJS.git
cd Galachain-Connect-NextJS
```

## Setup and Installation

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Configure the Environment
Create a `.env.local` file in the root directory and add the following:

```plaintext
NEXT_PUBLIC_BURN_GATEWAY_API=https://gateway-mainnet.galachain.com/api/asset/token-contract
NEXT_PUBLIC_BURN_GATEWAY_PUBLIC_KEY_API=https://gateway-mainnet.galachain.com/api/asset/public-key-contract
NEXT_PUBLIC_GALASWAP_API=https://api-galaswap.gala.com/v1
NEXT_PUBLIC_PROJECT_ID=<your project id>
NEXT_PUBLIC_GATEWAY_API=https://api-galaswap.gala.com/galachain/api/asset/public-key-contract
```
Replace <your project id> with your actual project ID.

## Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Features

- **MetaMask Wallet Connection:** Seamlessly connect your MetaMask wallet.
- **Automatic User Registration:** Register users automatically with GalaChain if needed.
- **GALA Token Balance Display:** Check your GALA token balance, including locked amounts.
- **Token Burning Functionality:** Allows users to burn GALA tokens directly from the interface.
- **Token Transfer Functionality:** Allows users to transfer GALA tokens directly from the interface.

## Project Structure

- `pages/index.js` - The main entry point for the application.
- `components/`
  - `Balance.js` - Displays the GALA balance.
  - `BurnGala.js` - Handles the burning of GALA tokens.
  - `TransferGala.js` - Handles the transfer of GALA tokens.
  - `WalletConnect.js` - Manages wallet connections and interactions.

Environment variables are defined in `.env.local`. Next.js configuration is managed through `next.config.js`.

## Usage

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Click "Connect Wallet" to connect your MetaMask wallet.
3. Once connected, you'll see your GALA balance.
4. Enter the amount of GALA you want to burn.
5. Click "Burn Tokens" to initiate the transaction.
6. Confirm the transaction in your MetaMask popup.

## Development

This application is built using:

- **Next.js** for server-side rendering and static generation.
- **React** for building user interfaces.
- **TailwindCSS** for styling.
- **GalaChain Connect library** for blockchain interactions.
