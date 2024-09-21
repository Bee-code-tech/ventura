

// index.js or main.js
import ReactDOM from 'react-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import 'ethers/lib/utils';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import {wagmiConfig} from "./config/wagmi"
const queryClient = new QueryClient()


// Arbitrum Sepolia Testnet configuration
const activeChain = {
  chainId: 421614, // Chain ID for Arbitrum Sepolia Testnet
  rpc: ["https://sepolia.arbitrum.io/rpc"], // RPC URL for Arbitrum Sepolia
  chainName: "Arbitrum Sepolia",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrl: "https://sepolia-explorer.arbitrum.io", // Block Explorer for Arbitrum Sepolia
};

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <ThirdwebProvider activeChain={activeChain}>
     <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {/** ... */}
     
    <App />
     </QueryClientProvider>
    </WagmiProvider>
  </ThirdwebProvider>,
  document.getElementById('root')
);
