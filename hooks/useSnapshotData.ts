import React, { useEffect, useState } from "react";
import { getAllTimeLeaderBoardSnapshot } from "@/sdk/api";
export default function useSnapshotData() {
	const [data, setData] = useState([{}]);
	const [error, setError] = useState();

	async function handleFetchData() {
		return await getAllTimeLeaderBoardSnapshot()
			.then((res) => {
				setData(res.TransactionsSnapShot!);
				return res;
			})
			.catch((err) => {
				console.log(err);
				setError(err);
				return err;
			});
	}
	useEffect(() => {
		handleFetchData();
	}, [error]);

	return { handleFetchData, data, setData, setError, error };
}
