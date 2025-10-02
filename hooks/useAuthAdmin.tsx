import React, { useContext, useState } from "react";
import { useAccount } from "wagmi";
import { GameContext } from "./GameContext";
import { redirect } from "next/navigation";

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
	async function reqOnlyAdminAddress() {
		if (isConnected) {
			const admin = "0xaA212d254934380F0ED19Aa7D0B5F72c199b1f4E";
			if (
				address !== admin ||
				address !== "0xc2a5627Df9Ce0746A6C6c272533c6d9090F035c3"
			) {
				redirect("/");
			}
		} else {
			redirect("/");
		}
	}

	return { authAdmin, authUserForSending, reqOnlyAdminAddress };
}
