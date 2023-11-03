'use client'
import {useEffect, useState } from "react";
import AdminFilter from "@/components/AdminFilter"
import AdminRewardsTable from "@/components/AdminRewardsTable"
import AdminRewardsDetails from "@/data/AdminRewardsDetails"
import AdminSendRewards from "@/components/AdminSendRewards"

const AdminNFTMinting = () => {

    const [originalData, setOriginalData] = useState([])
    const [storeData, setStoreData] = useState([])
    const [title, setTitle] = useState("All")

    useEffect(() => {
        setOriginalData(AdminRewardsDetails)
        setStoreData(AdminRewardsDetails);
    }, [])

    const handleFilter = (selected) => {
        if (selected === "all") {
            setStoreData(originalData);
            setTitle("All")
        }
        else {
            const filtered = originalData.filter(item => item.reward === selected);
            setStoreData(filtered);
            setTitle(selected);
        } 
    }

    const refresh = () => {
        setStoreData(originalData);
        setTitle("All")
    }

    return (
        <div>
            <AdminFilter onFilter={handleFilter} onRefresh={refresh}/>
            <AdminRewardsTable data={storeData} title={title} />
            <AdminSendRewards />
        </div>
    )
}

export default AdminNFTMinting