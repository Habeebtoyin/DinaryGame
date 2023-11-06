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
		let data = await fetchUserGameData(userGameData.walletAddress);
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
		data = await fetchUserGameData(userGameData.walletAddress);
		setUserGameData(data);
		const { nftReward } = data;

		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 3000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage1",
						"true"
					),
				});
			}
		});

		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 6000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage2",
						"true"
					),
				});
			}
		});
		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 9000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage3",
						"true"
					),
				});
			}
		});
		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 12000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage4",
						"true"
					),
				});
			}
		});
		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 15000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage5",
						"true"
					),
				});
			}
		});
		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 18000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage6",
						"true"
					),
				});
			}
		});
		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 21000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage7",
						"true"
					),
				});
			}
		});
		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 24000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage8",
						"true"
					),
				});
			}
		});
		fetchAandUpdate(async (nftReward: any) => {
			if (parseInt(userGameData.TotalScore) >= 27000000) {
				await updateUserGameData(userGameData.walletAddress, {
					nftReward: objectModifier(
						nftReward,
						"isMasterNftEligibleStage9",
						"true"
					),
				});
			}
		});
	};

	//must have burnt 3 nfts

	async function fetchAandUpdate(updateFunction: any) {
		let data = await fetchUserGameData(userGameData.walletAddress);
		setUserGameData(data);
		const { nftReward } = data;
		await updateFunction(nftReward);
	}

	function objectModifier(object: any, fieldName: string, value: string) {
		if (object.hasOwnProperty(fieldName)) {
			// Update the existing field
			object[fieldName] = value;
		} else {
			// Create a new field
			object[fieldName] = value;
		}

		return object;
	}

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
