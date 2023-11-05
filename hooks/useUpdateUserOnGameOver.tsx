import React, { useContext, useEffect } from "react";
import { GameContext } from "./GameContext";

export default function useUpdateUserOnGameOver() {
	const {
		userGameData,
		setUserGameData,
		updateUserGameData,
		fetchUserGameData,
		isMoveable,
		setIsMoveable,
		moveCounter,
		setMoveCounter,
		isGameOver,
		setGameOver,
	} = useContext(GameContext);
	const calls = async () => {
		const currentEpochTime = Math.floor(new Date().getTime() / 1000);
		const data = await fetchUserGameData(userGameData.walletAddress);
		console.log("here 1", { data });
		setUserGameData(data);
		// console.log("total", userGameData.TotalScore);

		await updateUserGameData(userGameData.walletAddress, {
			TotalScore: parseTotalScore(
				userGameData.TotalScore,
				userGameData.Score
			),
			GameOverScore: userGameData.Score,
			updated_at: currentEpochTime.toString(),
		});
		await updateUserGameData(userGameData.walletAddress, {
			Score: "0",
		});
		if (parseInt(userGameData.TotalScore) >= 3000000) {
			await updateUserGameData(userGameData.walletAddress, {
				isMasterNftEligibleStage1: true,
			});
		}
		if (parseInt(userGameData.TotalScore) >= 6000000) {
			await updateUserGameData(userGameData.walletAddress, {
				isMasterNftEligibleStage2: true,
			});
		}
		if (parseInt(userGameData.TotalScore) >= 9000000) {
			await updateUserGameData(userGameData.walletAddress, {
				isMasterNftEligibleStage2: true,
			});
		}
	};

	function parseTotalScore(score: string, gameScore: any) {
		const scoreInt = parseInt(score);
		if (score == "NaN") {
			return "0";
		}
		if (score == "0") {
			return (scoreInt + parseInt(gameScore)).toString();
		}
		if (!scoreInt && !score) {
			parseInt(gameScore).toString();
		}
		if (scoreInt > 0) {
			return (scoreInt + parseInt(gameScore)).toString();
		}
	}

	// updated leader board
	//check legendary eligibility

	return { calls };
}
