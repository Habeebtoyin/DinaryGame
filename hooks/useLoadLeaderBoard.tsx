import { getAllData } from "@/sdk/api";
import { useEffect, useState } from "react";

export default function useLoadLeaderBoard() {
	const [leaderBoard, setleaderBoard]: any[] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	//get all users
	async function createLeaderBoard() {
		setIsLoading(true);
		const allUsers = await getAllData();
		const currentEpochTime = Math.floor(new Date().getTime() / 1000);
		const twentyFourHoursAgoEpochTime = currentEpochTime - 24 * 60 * 60;
		const thirtyMinutesAgo =
			Math.floor(new Date().getTime() / 1000) - 30 * 60;
		let leadGamers = allUsers.GamePassUsers?.filter(
			(el) =>
				el.updated_at >= twentyFourHoursAgoEpochTime &&
				parseInt(el.bestScore) > 0
		);
		console.log({ leadGamers });
		if (leadGamers && leadGamers.length > 0 && leadGamers != undefined) {
			leadGamers.sort(
				(a, b) => parseInt(b.bestScore) - parseInt(a.bestScore)
			);
		}
		setIsLoading(false);
		return leadGamers;
	}

	return { createLeaderBoard, isLoading };
}
