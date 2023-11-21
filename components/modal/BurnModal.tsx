import React, { useState } from "react";
import ClaimUiComp from "../ClaimUiComp";
import useClaimNfts from "@/hooks/useClaimNfts";
import LoadingModal from "./LoadingModal";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

export default function BurnModal({ userGameData }: any) {
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
	async function handleMint() {
		settxState("LOADING");
		await burnNft()
			.then((res) => {
				if (res) {
					settxState("SUCESSFUL");
				}
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
					image="l"
					linkName="Mint Now"
					actionFunction={handleMint}
					desc="Burn your 3 Indices Master NFTs to claim 1 Indices Legendary NFT"
					title="Get 1 ETH and 1 Legendary NFT"
				/>
			)}
			{txState === "LOADING" && <LoadingModal />}
			{txState === "SUCESSFUL" && (
				<SuccessModal desc="You have sucessfully burnt this nfts" />
			)}
			{txState === "ERROR_OCCURRED" && <ErrorModal />}
		</>
	);
}
