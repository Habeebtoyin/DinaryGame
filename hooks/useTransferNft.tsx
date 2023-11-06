import GamePassNftContract from "@/sdk/web3";
import React, { useState, useEffect, useContext } from "react";
import { useEthersProvider, useEthersSigner } from "@/sdk/ethersAdapter";
import { LEGENDRY_NFT, MASTER_NFT } from "@/sdk/config";
import { Signer } from "ethers";
import { useAccount } from "wagmi";
import { GameContext } from "./GameContext";
export default function useTransferNft() {
	const [isSuccessful, setSuccessful] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { isConnected } = useAccount();
	const signer = useEthersSigner();
	const provider = useEthersProvider();
	const { updateUserGameData, fetchUserGameData, setUserGameData } =
		useContext(GameContext);

	async function transferNft(
		_amount: string,
		_to: string,
		nftType: "master" | "legendary"
	) {
		setSuccessful(false);
		setIsLoading(true);
		const contractAddress =
			nftType === "master" ? MASTER_NFT : LEGENDRY_NFT;
		const nftContract = new GamePassNftContract(
			contractAddress,
			signer!,
			provider
		);
		await fetchAandUpdateUser(_to)
			.then(async (res) => {
				await nftContract
					.transferNft(_amount, _to)
					.then(async (res) => {
						let data = await fetchUserGameData(_to);
						console.log("here 1", { data });

						const { nftReward } = data;
						let fieldName =
							nftType === "master"
								? "masterNftAmount"
								: "legendaryNftamount";
						try {
							if (nftReward) {
								//console.log("reward print", nftReward["down"]);
								await updateUserGameData(_to, {
									nftReward: objectModifier(
										nftReward,
										fieldName,
										(
											parseInt(
												nftReward[fieldName]
													? nftReward[fieldName]
													: 0
											) + parseInt(_amount)
										).toString()
									),
								});
								setSuccessful(true);
								setIsLoading(false);
								console.log("this is Good");
							} else {
								await updateUserGameData(_to, {
									nftReward: { [fieldName]: _amount },
								});
							}
						} catch (error: any) {
							console.log("this kind error is bad", { error });
							setError(error);
							setSuccessful(false);
							setIsLoading(false);
						}
					})
					.catch((err) => {
						setError(err);
						setSuccessful(false);
						setIsLoading(false);
					});
			})
			.catch((err) => {
				setError(err);
			});
	}

	async function fetchAandUpdateUser(walletAddress: string) {
		let data = await fetchUserGameData(walletAddress);
		if (!data.error) {
			setUserGameData(data);
			return true;
		} else {
			return false;
		}
	}
	function objectModifier(object: any, fieldName: string, value: string) {
		if (object.hasOwnProperty(fieldName)) {
			// Update the existing field
			object[fieldName] = value;
		} else {
			// Create a new field
			object[fieldName] = value;
		}

		return object;
	}

	return {
		transferNft,
		isConnected,
		isSuccessful,
		setIsLoading,
		setSuccessful,
		error,
		isLoading,
	};
}
