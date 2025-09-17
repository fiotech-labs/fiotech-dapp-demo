# Fiotech DApp Demo

A modern Web3 DApp built with Next.js and Reown AppKit, featuring wallet connection, multi-chain support, and smart contract interaction.

## Features

- 🔗 **Wallet Connection**: Connect with any supported wallet using Reown AppKit
- 🌐 **Multi-Chain Support**: Ethereum, Arbitrum, and other EVM-compatible networks
- 📊 **Smart Contract Reading**: Example contract interaction with USDT
- 🎨 **Modern UI**: Beautiful, responsive design with dark mode support
- ⚡ **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Web3**: Reown AppKit, Wagmi, Viem
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fiotech-dapp-demo
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
# Create .env.local file
echo 'NEXT_PUBLIC_PROJECT_ID="your_project_id_here"' > .env.local
```

4. Get your WalletConnect Project ID:
   - Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Create a new project
   - Copy your Project ID to `.env.local`

5. Run the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with AppKit providers
│   ├── page.tsx            # Main page with wallet connection
│   └── globals.css         # Global styles
├── components/
│   └── ContractExample.tsx # Smart contract interaction example
├── config/
│   └── index.tsx           # Wagmi adapter configuration
├── context/
│   └── index.tsx           # AppKit context provider
└── global.d.ts             # TypeScript declarations
```

## Usage

1. **Connect Wallet**: Click the "Connect Wallet" button to open the AppKit modal
2. **View Balance**: Once connected, see your wallet address and balance
3. **Smart Contract**: View the USDT contract example showing total supply
4. **Switch Networks**: Use the network selector in the wallet modal

## Configuration

### Supported Networks

The app is configured to support:
- Ethereum Mainnet
- Arbitrum

To add more networks, update `config/index.tsx`:

```typescript
import { mainnet, arbitrum, base, polygon } from '@reown/appkit/networks'

export const networks: [Chain, ...Chain[]] = [mainnet, arbitrum, base, polygon]
```

### Customizing AppKit

Modify the AppKit configuration in `context/index.tsx`:

```typescript
createAppKit({
  adapters: [wagmiAdapter],
  projectId: projectId!,
  networks: networks,
  defaultNetwork: mainnet,
  metadata: {
    name: 'Your App Name',
    description: 'Your App Description',
    url: 'https://your-app.com',
    icons: ['https://your-app.com/icon.png']
  },
  features: { analytics: true }
})
```

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Adding Smart Contract Interactions

1. Create a new component in `components/`
2. Use wagmi hooks like `useReadContract`, `useWriteContract`
3. Import and use in your pages

Example:
```typescript
import { useReadContract } from 'wagmi'

const { data, error, isLoading } = useReadContract({
  abi: YourContractABI,
  address: '0x...',
  functionName: 'yourFunction',
})
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `NEXT_PUBLIC_PROJECT_ID` environment variable
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Check the [Reown AppKit documentation](https://docs.reown.com/appkit)
- Review [Wagmi documentation](https://wagmi.sh)
- Open an issue in this repository
