import React, { useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { GameContext } from "./GameContext";

export default function UseAuth() {
	const [isLoading, setIsLoading] = useState(false);
	const { isConnected, address } = useAccount();
	const { auth, setUserGameData } = useContext(GameContext);

	const Authenticate = async () => {
		if (isConnected) {
			const useGameData = await auth(address);
			setUserGameData(useGameData);
		}
	};
	useEffect(() => {
		setIsLoading(!isLoading);
	}, []);

	useEffect(() => {
		Authenticate();
	}, [isLoading]);
}
