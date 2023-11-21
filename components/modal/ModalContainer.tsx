import React, { useContext } from "react";
import ClaimUi from "../ClaimUi";
import MintIndicesModal from "./MintIndicesModal";
import { GameContext } from "@/hooks/GameContext";
import BurnModal from "./BurnModal";
export default function ModalContainer() {
	const {
		userGameData,
		setUserGameData,
		fetchUserGameData,
		burnMasternftModal,
		setBurnMasterNftModal,
		mintLegendNftModal,
		setMintLegendNftModal,
		mintMasternftModal,
		setMintMasterNftModal,
	} = useContext(GameContext);

	function handleCloseModal(e: any) {
		if (e.target.id == "modal-container") {
			setBurnMasterNftModal(false);
			setMintLegendNftModal(false);
			setMintMasterNftModal(false);
			console.log("modal closed ");
		}
	}
	return (
		<div
			id="modal-container"
			onClick={handleCloseModal}
			className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
		>
			{mintMasternftModal && (
				<MintIndicesModal userGameData={userGameData} />
			)}
			{burnMasternftModal && <BurnModal />}
		</div>
	);
}
