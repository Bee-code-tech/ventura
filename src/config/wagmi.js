import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, arbitrum, arbitrumSepolia } from 'wagmi/chains'

export const wagmiConfig = createConfig({
  chains: [ arbitrum, arbitrumSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http()
  },
})