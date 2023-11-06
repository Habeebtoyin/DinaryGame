import { getAllData } from "@/sdk/api";
import { useEffect, useState } from "react";

export default function useLoadLeaderBoard() {
	const [leaderBoard, setleaderBoard]: any[] = useState([]);
	//get all users
	async function createLeaderBoard() {
		const allUsers = await getAllData();
		const currentEpochTime = Math.floor(new Date().getTime() / 1000);
		const twentyFourHoursAgoEpochTime = currentEpochTime - 24 * 60 * 60;
		const thirtyMinutesAgo =
			Math.floor(new Date().getTime() / 1000) - 30 * 60;
		const leadGamers = allUsers.GamePassUsers?.filter(
			(el) => el.updated_at >= twentyFourHoursAgoEpochTime
		);
		console.log({ leadGamers });

		return leadGamers;
	}

	return createLeaderBoard;
}
