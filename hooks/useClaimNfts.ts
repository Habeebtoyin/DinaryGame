import { useEthersProvider, useEthersSigner } from "@/sdk/ethersAdapter";
import React, { useContext, useState } from "react";
import { useAccount } from "wagmi";
import GamePassNftContract from "@/sdk/web3";
import { LEGENDRY_NFT, MASTER_NFT } from "@/sdk/config";
import { GameContext } from "./GameContext";
import { toast } from "react-toastify";
export default function useClaimNfts(userGameData: any) {
	const [isLoading, SetIsLoading] = useState(false);
	const [isSucess, SetIsSuccess] = useState(false);
	const [error, SetError] = useState();
	const { address } = useAccount();
	const signer = useEthersSigner();
	const provider = useEthersProvider();
	const SoulLegend = new GamePassNftContract(
		LEGENDRY_NFT,
		signer as any,
		provider
	);
	const SoulMaster = new GamePassNftContract(MASTER_NFT, signer!, provider);
	const { updateUserGameData } = useContext(GameContext);

	const calls = async () => {
		return await updateUserGameData(userGameData.walletAddress, {
			TotalScore: (parseInt(userGameData.TotalScore) - 500).toString(),
		});
	};
	const callsUpdate = async (data: string, field: string) => {
		return await updateUserGameData(userGameData.walletAddress, {
			nftReward: objectModifier(userGameData.nftReward, field, data),
		});
	};

	async function claimMasterNft() {
		SetIsLoading(true);
		return await SoulMaster.claimSBT()
			.then(async (res) => {
				SetIsLoading(false);
				SetIsSuccess(true);
				toast.success(" Master NFT Claimed");
				console.log({ res });
				SetIsSuccess(true);
				calls();
				await callsUpdate("false", "masterNftBurnt");
			})
			.catch((err) => {
				SetIsLoading(false);
				toast.error(
					"Error Occured while burnning! Check Gas and Try Again"
				);
				console.log({ err });
				SetIsSuccess(true);
			});
	}
	async function claimLegendNft() {
		SetIsLoading(true);
		return await SoulLegend.claimSBT()
			.then(async (res) => {
				SetIsLoading(false);
				SetIsSuccess(true);
				toast.success(" Legendary NFT Claimed");
				console.log({ res });
				await callsUpdate("false", "masterNftBurnt");
				SetIsSuccess(false);
			})
			.catch((err) => {
				SetIsLoading(false);
				toast.error(
					"Error Occured while burnning! Check Gas and Try Again"
				);
				console.log({ err });
				SetIsSuccess(true);
			});
	}
	async function burnNft() {
		let counter = 0;
		const ids = await SoulMaster.getAlltokensByOwner();
		for (let index = 0; index < ids.length; index++) {
			const element = ids[index];
			await SoulMaster.burnNft(element)
				.then(async (res) => {
					toast.success(
						`Master SoulBound Nft with Token Id: ${element} has been burnt`
					);
					counter++;
				})
				.catch(async (err) => {
					await callsUpdate("false", "masterNftBurnt");
					console.log(err);
					toast.error(
						"Error Occured while burnning! Check Gas and Try Again"
					);
				});
		}
		if (counter >= 1) {
			await callsUpdate("true", "masterNftBurnt");
		}
		return ids;
	}
	async function MasternftBalance() {
		return await SoulMaster.SBTBalance(address?.toString()!);
	}
	async function LegendNftBalance() {
		return await SoulLegend.SBTBalance(address?.toString()!);
	}

	function objectModifier(object: any, fieldName: string, value: string) {
		if (object) {
			if (object.hasOwnProperty(fieldName)) {
				// Update the existing field
				object[fieldName] = value;
			} else {
				// Create a new field
				object[fieldName] = value;
			}
		} else {
			object = { create: "new" };
			object[fieldName] = value;
		}

		return object;
	}

	return {
		claimLegendNft,
		claimMasterNft,
		LegendNftBalance,
		MasternftBalance,
		error,
		isLoading,
		isSucess,
		burnNft,
	};
}
