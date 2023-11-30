"use client";
import { useContext, useEffect, useState } from "react";
import AdminFilter from "@/components/AdminFilter";
import AdminRewardsTable from "@/components/AdminRewardsTable";
import AdminRewardsDetails from "@/data/AdminRewardsDetails";
import AdminSendRewards from "@/components/AdminSendRewards";
import { GameContext } from "@/hooks/GameContext";
import useSnapshotData from "@/hooks/useSnapshotData";

const AdminNFTMinting = () => {
	const [originalData, setOriginalData] = useState([]);
	const [storeData, setStoreData] = useState([]);
	const [title, setTitle] = useState("All");
	const { filterTime } = useContext(GameContext);
	const { data, error, isLoading } = useSnapshotData(filterTime);

	useEffect(() => {}, []);

	const handleFilter = (selected: any) => {
		if (selected === "all") {
			setStoreData(data);
			setTitle("All");
		} else {
			const filtered = originalData.filter(
				(item: any) => item.reward === selected
			);
			setStoreData(filtered);
			setTitle(selected);
		}
	};

	const refresh = () => {
		setStoreData(originalData);
		setTitle("All");
	};

	return (
		<div>
			<AdminFilter onFilter={handleFilter} onRefresh={refresh} />
			<AdminRewardsTable data={data ? data.snaps : data} title={title} />
			<AdminSendRewards />
		</div>
	);
};

export default AdminNFTMinting;
