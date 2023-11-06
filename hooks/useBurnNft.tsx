import { LEGENDRY_NFT, MASTER_NFT } from "@/sdk/config";
import { useEthersProvider, useEthersSigner } from "@/sdk/ethersAdapter";
import GamePassNftContract from "@/sdk/web3";
import React, { useState, useEffect, useContext } from "react";
import { useAccount } from "wagmi";

export default function useBurnNft() {
	const [isSuccessful, setSuccessful] = useState(false);
	const [error, setError] = useState(null);
	const { isConnected } = useAccount();
	const signer = useEthersSigner();
	const provider = useEthersProvider();

	async function burnNft(
		_amount: number,
		_to: string,
		nftType: "master" | "legend",
		callback: any | undefined
	) {
		const contractAddress =
			nftType === "master" ? MASTER_NFT : LEGENDRY_NFT;
		const nftContract = new GamePassNftContract(
			contractAddress,
			signer!,
			provider
		);
		return await nftContract
			.burnNft(_amount)
			.then((res) => {
				console.log("Burn NFT Successful", res);
				setSuccessful(true);
				if (callback) {
					callback();
				}
			})
			.catch((err) => {
				console.log("Burn NFT Error", err);
				setError(err);
			});
	}

	return { burnNft, isConnected, isSuccessful, error };
}
