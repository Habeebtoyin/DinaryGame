import React, { useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { GameContext } from "./GameContext";

export default function UseAuth() {
	const [isLoading, setIsLoading] = useState(false);
	const {
		isConnected,
		address,
		isConnecting,
		isDisconnected,
		isReconnecting,
	} = useAccount();
	const { auth, setUserGameData, signer } = useContext(GameContext);

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
		if (address) {
			Authenticate();
		}
	}, [
		isLoading,
		isConnected,
		address,
		signer,
		isConnecting,
		isDisconnected,
		isReconnecting,
	]);
}
