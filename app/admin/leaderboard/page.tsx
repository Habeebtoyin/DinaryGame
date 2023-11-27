"use client";
import { SetStateAction, useEffect, useState } from "react";
import useSWR from "swr";
import AdminFilter from "@/components/AdminFilter";
import AdminLeaderBoardTable from "@/components/AdminLeaderBoardTable";
import AdminLeaderboardDetails from "@/data/AdminLeaderboardDetails";
import useLoadLeaderBoard from "@/hooks/useLoadLeaderBoard";
import { getAllTimeLeaderBoardSnapshot } from "@/sdk/api";
const fetcher = () =>
	getAllTimeLeaderBoardSnapshot().then((res) => res.TransactionsSnapShot);
const AdminLeaderBoard = () => {
	const { data, error, isLoading } = useSWR("/api/user/123", fetcher);
	//const [data, setFetchData] = useState();
	const [originalData, setOriginalData] = useState([]);
	const [storeData, setStoreData]: any = useState([]);
	const [title, setTitle] = useState("All-Time Leaderboard");

	const handleFilter = (selected: any) => {
		if (selected === "all") {
			setStoreData(originalData);
			setTitle("All-Time Leaderboard");
		} else {
			const filtered = originalData.filter(
				(item: any) => item.game === selected
			);
			setStoreData(data!);
			setOriginalData(storeData);
			setTitle(selected);
		}
	};

	const refresh = () => {
		setStoreData(data);
		setTitle("All-Time Leaderboard");
	};
	useEffect(() => {
		// fetcher()
		// 	.then((res: any) => {
		// 		console.log({ res });
		// 		// setFetchData(res);
		// 	})
		// 	.catch((err) => {
		// 		console.log({ err });
		// 	});
		console.log({ isLoading, error });
		console.log("herehrerh", { data });
	}, [error, isLoading]);

	return (
		<div>
			<AdminFilter onFilter={handleFilter} onRefresh={refresh} />
			<AdminLeaderBoardTable data={data} title={title} />
		</div>
	);
};

export default AdminLeaderBoard;
