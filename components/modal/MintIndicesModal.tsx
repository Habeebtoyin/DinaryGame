import React, { useContext, useState } from "react";
import ClaimUiComp from "../ClaimUiComp";
import useClaimNfts from "@/hooks/useClaimNfts";
import SuccessModal from "./SuccessModal";
import LoadingModal from "./LoadingModal";
import ErrorModal from "./ErrorModal";
import { GameContext } from "@/hooks/GameContext";
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
	const {
		setUserGameData,
		fetchUserGameData,
		burnMasternftModal,
		setBurnMasterNftModal,
		mintLegendNftModal,
		setMintLegendNftModal,
		mintMasternftModal,
		setMintMasterNftModal,
	} = useContext(GameContext);

	async function handleMint() {
		settxState("LOADING");
		await claimMasterNft()
			.then((res: any) => {
				// console.log(
				// 	"here here",
				// 	JSON.parse(JSON.stringify(res)).info.error
				// );
				//console.log({ error, isLoading, isSucess });
				if (!JSON.parse(JSON.stringify(res)).info.error) {
					settxState("SUCESSFUL");
				} else {
					settxState("ERROR_OCCURED");
				}
			})
			.catch((err) => {
				// console.log("here 4", { err });
				// settxState("ERROR_OCCURED");
			});
		setMintMasterNftModal(false);
		setMintLegendNftModal(false);
		setBurnMasterNftModal(false);
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
