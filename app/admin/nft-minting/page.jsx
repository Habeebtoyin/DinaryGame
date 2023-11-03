'use client'
import {useEffect, useState } from "react";
import AdminFilter from "@/components/AdminFilter"
import AdminNFTTable from "@/components/AdminNFTTable"
import AdminNFTDetails from "@/data/AdminNFTDetails"

const AdminNFTMinting = () => {

    const [originalData, setOriginalData] = useState([])
    const [storeData, setStoreData] = useState([])
    const [title, setTitle] = useState("All")

    useEffect(() => {
        setOriginalData(AdminNFTDetails)
        setStoreData(AdminNFTDetails);
    }, [])

    const handleFilter = (selected) => {
        if (selected === "all") {
            setStoreData(originalData);
            setTitle("All")
        }
        else {
            const filtered = originalData.filter(item => item.nft === selected);
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
            <AdminNFTTable data={storeData} title={title} />
        </div>
    )
}

export default AdminNFTMinting