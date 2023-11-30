"use client";
import { SetStateAction, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import AdminFilter from "@/components/AdminFilter";
import AdminLeaderBoardTable from "@/components/AdminLeaderBoardTable";
import AdminLeaderboardDetails from "@/data/AdminLeaderboardDetails";
import useSnapshotData from "@/hooks/useSnapshotData";
import { GameContext } from "@/hooks/GameContext";

const AdminLeaderBoard = () => {
	const { filterTime } = useContext(GameContext);
	const { data, error, isLoading } = useSnapshotData(filterTime);
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
		setTitle("All-Time Leaderboard");
	};
	useEffect(() => {}, [error, isLoading]);

	return (
		<div>
			<AdminFilter onFilter={handleFilter} onRefresh={refresh} />
			<AdminLeaderBoardTable
				data={data ? data.snaps : data}
				title={title}
			/>
		</div>
	);
};

export default AdminLeaderBoard;
