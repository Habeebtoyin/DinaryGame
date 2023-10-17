"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { useIsMounted } from "../hooks/useIsMounted";
import {
	RainbowKitProvider,
	getDefaultWallets,
	connectorsForWallets,
	darkTheme,
} from "@rainbow-me/rainbowkit";
import {
	argentWallet,
	trustWallet,
	ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const nautilus = {
	id: 22222,
	name: "Nautilus Mainnet",
	network: "nautilus",
	iconUrl: "https://example.com/icon.svg",
	iconBackground: "#fff",
	nativeCurrency: {
		decimals: 18,
		name: "Nautilus",
		symbol: "ZBC",
	},
	rpcUrls: {
		public: { http: ["https://api.nautilus.nautchain.xyz"] },
		default: { http: ["https://api.nautilus.nautchain.xyz"] },
	},
	blockExplorers: {
		default: { name: "NautilusScan", url: "https://nautscan.com/" },
		etherscan: { name: "NautilusScan", url: "https://nautscan.com/" },
	},
};
const nautilusTestnet = {
	id: 88002,
	name: "Nautilus Proteus Testnet",
	network: "nautilusTestnet",
	iconUrl: "https://example.com/icon.svg",
	iconBackground: "#fff",
	nativeCurrency: {
		decimals: 18,
		name: "Nautilus",
		symbol: "tZBC",
	},
	rpcUrls: {
		public: { http: ["https://api.proteus.nautchain.xyz/solana"] },
		default: { http: ["https://api.proteus.nautchain.xyz/solana"] },
	},
	blockExplorers: {
		default: {
			name: "TestnetNautilusScan",
			url: "https://proteus.nautscan.com/",
		},
		etherscan: {
			name: "TestnetNautilusScan",
			url: "https://proteus.nautscan.com/",
		},
	},
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[nautilus, nautilusTestnet, goerli],
	[publicProvider()]
);

const projectId = "f48efad0c8c0c6656fbb202708700e4d";

const { wallets } = getDefaultWallets({
	appName: "Dyelum",
	projectId,
	chains,
});

const demoAppInfo = {
	appName: "Dyelum",
};

const connectors = connectorsForWallets([
	...wallets,
	{
		groupName: "Other",
		wallets: [
			argentWallet({ projectId, chains }),
			trustWallet({ projectId, chains }),
			ledgerWallet({ projectId, chains }),
		],
	},
]);

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});

export default function ClientProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const mounted = useIsMounted();
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider
				chains={chains}
				appInfo={demoAppInfo}
				theme={darkTheme()}
				coolMode
			>
				{mounted && children}
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
