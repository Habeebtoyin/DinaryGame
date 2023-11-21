import React, { useState } from "react";
import ClaimUiComp from "../ClaimUiComp";
import useClaimNfts from "@/hooks/useClaimNfts";
import SuccessModal from "./SuccessModal";
import LoadingModal from "./LoadingModal";
import ErrorModal from "./ErrorModal";
export default function MintIndicesModal({ userGameData }: any) {
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
		await claimMasterNft()
			.then((res) => {
				settxState("SUCESSFUL");
			})
			.catch((err) => {
				settxState("ERROR_OCCURED");
			});
	}
	return (
		<div>
			{txState === "NO_TX" && (
				<ClaimUiComp
					title="Mint Master NFT"
					desc=""
					linkName="Mint Now"
					image="https://bafybeie3vfusfjilpaa2dtichgfbe6mjf2vdawfff7a3lken4agth7nzca.ipfs.w3s.link/Master%20Grid%20NFT.jpg"
					actionFunction={handleMint}
				/>
			)}
			{txState === "LOADING" && <LoadingModal />}
			{txState === "ERROR_OCCURED" && <ErrorModal />}
			{txState === "SUCESSFUL" && (
				<SuccessModal desc={"Your Just Minted a Master NFT"} />
			)}
		</div>
	);
}
