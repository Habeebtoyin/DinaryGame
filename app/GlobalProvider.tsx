"use client";
import { GameContext } from "@/hooks/GameContext";
import { useState } from "react";
import useApi from "@/hooks/useApi";
import { type UserGameData } from "@/types/GameTypes";
import { useAccount } from "wagmi";
export function GlobalProvider({ children }: any) {
	const [text, setText] = useState("");
	const { isConnected, isConnecting, address } = useAccount();
	const [userGameData, setUserGameData] = useState<UserGameData>();
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
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
