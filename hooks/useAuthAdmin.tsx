import React, { useContext, useState } from "react";
import { useAccount } from "wagmi";
import { GameContext } from "./GameContext";

export default function useAuthAdmin() {
	const [isLoading, setIsLoading] = useState(false);
	const { isConnected } = useAccount();
	const { auth, setUserGameData, address } = useContext(GameContext);
	async function authUserForSending(address: any) {
		if (isConnected) {
			const useGameData = await auth(address);
			setUserGameData(useGameData);
		}
	}
	async function authAdmin() {
		if (isConnected) {
			const useGameData = await auth(address);
			setUserGameData(useGameData);
		}
	}

	return { authAdmin, authUserForSending };
}
