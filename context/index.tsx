"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, cookieToInitialState, type Config } from "wagmi";
import { createAppKit } from "@reown/appkit/react";
// Import config, networks, projectId, and wagmiAdapter from your config file
import { config, networks, projectId, wagmiAdapter } from "@/config";
// Import the default network separately if needed
import { mainnet } from "@reown/appkit/networks";

const queryClient = new QueryClient();

const metadata = {
  name: "Fiotech DApp Demo",
  description: "A demo DApp using Reown AppKit",
  url:
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000", // Replace YOUR_APP_URL
  icons: ["https://avatars.githubusercontent.com/u/37784886"], // Replace YOUR_ICON_URL
};

// Initialize AppKit *outside* the component render cycle
// Add a check for projectId for type safety, although config throws error already.
if (!projectId) {
  console.error("AppKit Initialization Error: Project ID is missing.");
  // Optionally throw an error or render fallback UI
} else {
  createAppKit({
    adapters: [wagmiAdapter],
    // Use non-null assertion `!` as projectId is checked runtime, needed for TypeScript
    projectId: projectId!,
    // Pass networks directly (type is now correctly inferred from config)
    networks: networks,
    defaultNetwork: mainnet, // Or your preferred default
    metadata,
    features: { analytics: true, email: false, socials: false }, // Optional features
  });
}

export default function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null; // Cookies from server for hydration
}) {
  // Calculate initial state for Wagmi SSR hydration
  const initialState = cookieToInitialState(config as Config, cookies);

  return (
    // Cast config as Config for WagmiProvider
    <WagmiProvider config={config as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
