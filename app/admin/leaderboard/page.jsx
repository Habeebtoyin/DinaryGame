'use client'
import {useEffect, useState } from "react";
import AdminFilter from "@/components/AdminFilter"
import AdminLeaderBoardTable from "@/components/AdminLeaderBoardTable"
import AdminLeaderboardDetails from "@/data/AdminLeaderboardDetails"
import useLoadLeaderBoard from "@/hooks/useLoadLeaderBoard";
const AdminLeaderBoard = () => {
    const data = useLoadLeaderBoard();
    const [originalData, setOriginalData] = useState([])
    const [storeData, setStoreData] = useState([])
    const [title, setTitle] = useState("All-Time Leaderboard")

    useEffect(() => {
        setOriginalData(data)
        setStoreData(data);
    }, [])

    const handleFilter = (selected) => {
        if (selected === "all") {
            setStoreData(originalData);
            setTitle("All-Time Leaderboard")
        }
        else {
            const filtered = originalData.filter(item => item.game === selected);
            setStoreData(data);
            setTitle(selected);
        } 
    }

    const refresh = () => {
        setStoreData(data);
        setTitle("All-Time Leaderboard")
    }

    return (
        <div>
            <AdminFilter onFilter={handleFilter} onRefresh={refresh}/>
            <AdminLeaderBoardTable data={storeData} title={title} />
        </div>
    )
}

export default AdminLeaderBoard