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
	const [moveCounter, setMoveCounter] = useState(
		parseInt(userGameData?.moveUsed || "0") || 0
	);
	const [isMoveable, setIsMoveable] = useState(false);
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
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
