import React, { useContext, useState } from "react";
import ClaimUiComp from "../ClaimUiComp";
import useClaimNfts from "@/hooks/useClaimNfts";
import LoadingModal from "./LoadingModal";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import { GameContext } from "@/hooks/GameContext";

export default function BurnModal({ userGameData }: any) {
	const [txState, settxState] = useState("NO_TX");
	const {
		setUserGameData,
		fetchUserGameData,
		burnMasternftModal,
		setBurnMasterNftModal,
		mintLegendNftModal,
		setMintLegendNftModal,
		amountOfMasterToBurn,
		amountOfLegenfToMint,
	} = useContext(GameContext);
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
	async function afterBurnCallBack() {
		settxState("SUCESSFUL");
		setMintLegendNftModal(true);
	}
	async function handleMint() {
		settxState("LOADING");
		await burnNft(() => afterBurnCallBack())
			.then((res) => {})
			.catch((err) => {
				if (err) {
					//	settxState("ERROR_OCCURED");
				}
			});
	}
	return (
		<>
			{txState == "NO_TX" && (
				<ClaimUiComp
					image="l"
					linkName="Burn Now"
					actionFunction={handleMint}
					desc={`Burn your ${amountOfMasterToBurn} Indices Master NFTs to claim ${amountOfLegenfToMint} Indices Legendary NFT`}
					title={`Get ${
						amountOfMasterToBurn == 3 || amountOfMasterToBurn == 9
							? 1
							: 3
					} ${
						amountOfMasterToBurn == 9 ? "BTC" : "ETH"
					} and ${amountOfLegenfToMint} Legendary NFT`}
				/>
			)}
			{txState === "LOADING" && <LoadingModal />}
			{/* {txState === "SUCESSFUL" && (
				<SuccessModal desc="You have sucessfully burnt this nfts" />
			)} */}
			{/* {txState === "ERROR_OCCURRED" && <ErrorModal />} */}
		</>
	);
}
