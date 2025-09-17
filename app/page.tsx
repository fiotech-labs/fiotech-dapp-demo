'use client'

import { useAccount, useBalance } from 'wagmi'
import ContractExample from '@/components/ContractExample'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Fiotech DApp Demo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Connect your wallet and explore Web3 features with Reown AppKit
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Wallet Connection
              </h2>
              
              {/* AppKit Button */}
              <div className="mb-8">
                <appkit-button />
              </div>

              {/* Connection Status */}
              {isConnected ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-green-800 dark:text-green-200 mb-4">
                    ✅ Wallet Connected Successfully!
                  </h3>
                  <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                    <p>
                      <span className="font-medium">Address:</span> {address}
                    </p>
                    {balance && (
                      <p>
                        <span className="font-medium">Balance:</span> {balance.formatted} {balance.symbol}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Connect Your Wallet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Click the button above to connect your wallet and start using the DApp
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contract Example */}
          <div className="mb-8">
            <ContractExample />
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Secure Connection
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Connect securely with your preferred wallet using Reown AppKit
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Multi-Chain Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Support for Ethereum, Arbitrum, and other EVM-compatible networks
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Easy Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Simple integration with wagmi and viem for powerful Web3 functionality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
