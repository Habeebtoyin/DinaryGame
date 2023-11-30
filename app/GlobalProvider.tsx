"use client";
import { GameContext } from "@/hooks/GameContext";
import { useState } from "react";
import useApi from "@/hooks/useApi";
import { type UserGameData } from "@/types/GameTypes";
import { useAccount } from "wagmi";
import { useEthersSigner } from "@/sdk/ethersAdapter";
export function GlobalProvider({ children }: any) {
	const signer = useEthersSigner();
	const [text, setText] = useState("");
	const { isConnected, isConnecting, address } = useAccount();
	const [userGameData, setUserGameData] = useState<UserGameData>();
	const [isGameOver, setGameOver] = useState(false);
	const [mintMasternftModal, setMintMasterNftModal] = useState(false);
	const [mintLegendNftModal, setMintLegendNftModal] = useState(false);
	const [burnMasternftModal, setBurnMasterNftModal] = useState(false);
	const [amountOfLegenfToMint, setAmountOfLegendToMint] = useState(0);
	const [amountOfMasterToBurn, setAmountOfMasterToBurn] = useState(0);
	const [moveCounter, setMoveCounter] = useState(
		parseInt(userGameData?.moveUsed || "0") || 0
	);
	const denom = 1000 * 60 * 60 * 24;
	const [isMoveable, setIsMoveable] = useState(false);
	const [filterTime, setFilterTime] = useState(
		(new Date().getTime() / denom).toFixed(0)
	);
	const { auth, updateUserGameData, fetchUserGameData } = new useApi();

	return (
		<GameContext.Provider
			value={{
				text,
				setText,
				auth,
				userGameData,
				setUserGameData,
				updateUserGameData,
				fetchUserGameData,
				isMoveable,
				setIsMoveable,
				isConnected,
				isConnecting,
				address,
				moveCounter,
				setMoveCounter,
				signer,
				isGameOver,
				setGameOver,
				burnMasternftModal,
				setBurnMasterNftModal,
				mintLegendNftModal,
				setMintLegendNftModal,
				mintMasternftModal,
				setMintMasterNftModal,
				amountOfLegenfToMint,
				setAmountOfLegendToMint,
				amountOfMasterToBurn,
				setAmountOfMasterToBurn,
				filterTime,
				setFilterTime,
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
