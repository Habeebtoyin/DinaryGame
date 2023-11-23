import useClaimNfts from "@/hooks/useClaimNfts";
import React, { useContext, useEffect, useState } from "react";
import ClaimUiComp from "../ClaimUiComp";
import ErrorModal from "./ErrorModal";
import LoadingModal from "./LoadingModal";
import SuccessModal from "./SuccessModal";
import { GameContext } from "@/hooks/GameContext";

export default function ClaimEthModal({ userGameData }: any) {
	const [txState, settxState] = useState("NO_TX");
	const {
		claimLegendNft,
		claimMasterNft,
		LegendNftBalance,
		MasternftBalance,
		error,
		isLoading,
		isSucess,
		burnNft,
	} = useClaimNfts(userGameData);
	const { amountOfLegenfToMint, amountOfMasterToBurn } =
		useContext(GameContext);
	useEffect(() => {
		console.log({ amountOfLegenfToMint });
	}, [amountOfLegenfToMint]);

	async function handleMint() {
		settxState("LOADING");
		const amountToMint = parseInt(
			localStorage.getItem("amountOfLegenfToMint")!
		);
		console.log("her herherherheh ", {
			amountOfLegenfToMint,
			amountToMint,
		});
		await claimLegendNft(amountOfLegenfToMint)
			.then((res: any) => {
				console.log("success");
				settxState("SUCESSFUL");
			})
			.catch((err) => {
				if (err) {
					settxState("ERROR_OCCURED");
				}
			});
	}
	return (
		<>
			{txState == "NO_TX" && (
				<ClaimUiComp
					image=""
					linkName="Claim Now"
					actionFunction={handleMint}
					desc={`Claim ${
						amountOfMasterToBurn == 3 || amountOfMasterToBurn == 9
							? 1
							: 3
					} ${amountOfMasterToBurn == 9 ? "BTC" : "ETH"}`}
					title={`Claim your ${
						amountOfMasterToBurn == 3 || amountOfMasterToBurn == 9
							? 1
							: 3
					} ${
						amountOfMasterToBurn == 9 ? "BTC" : "ETH"
					} for burning ${amountOfMasterToBurn} Indices Master NFTs`}
				/>
			)}
			{txState === "LOADING" && <LoadingModal />}
			{txState === "SUCESSFUL" && (
				<SuccessModal desc="You have successfully claimed BTC/NFTs" />
			)}
			{txState === "ERROR_OCCURRED" && <ErrorModal />}
		</>
	);
}
