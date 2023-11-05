import { getAllData } from "@/sdk/api";
import { useEffect } from "react";

export default function useLoadLeaderBoard() {
	//get all users
	async function createLeaderBoard() {
		const allUsers = await getAllData();
		console.log({ allUsers });
	}

	useEffect(() => {
		createLeaderBoard();
	}, []);

	// get all scores and time of update
	//sort out base on time
	// get the  top 7
	//save to database
	//load data from data base
}
