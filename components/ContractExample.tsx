'use client'

import { useReadContract } from 'wagmi'

// Example ABI for USDT (you can replace with any contract ABI)
const USDT_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  }
] as const

// USDT contract address on Ethereum mainnet
const USDT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7'

function ContractExample() {
  const { data: totalSupply, error, isLoading } = useReadContract({
    abi: USDT_ABI,
    address: USDT_ADDRESS,
    functionName: 'totalSupply',
  })

  if (isLoading) return <div className="text-center py-4">Loading contract data...</div>
  if (error) return <div className="text-center py-4 text-red-600">Error reading contract: {error.message}</div>

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Smart Contract Example
      </h3>
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">Contract:</span> USDT (Tether)
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">Address:</span> {USDT_ADDRESS}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">Total Supply:</span> {totalSupply ? (Number(totalSupply) / 1e6).toLocaleString() : 'N/A'} USDT
        </p>
      </div>
    </div>
  )
}

export default ContractExample
