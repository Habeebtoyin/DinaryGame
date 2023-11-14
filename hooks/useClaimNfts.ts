import { useEthersSigner } from "@/sdk/ethersAdapter";
import React from "react";
import { useAccount } from "wagmi";

export default function useClaimNfts() {
	const { address } = useAccount();
	const signer = useEthersSigner();
	async function claimMasterNft() {}
	async function claimLegendNft() {}
	async function nftBalance() {}

	return { claimLegendNft, claimMasterNft, nftBalance };
}
