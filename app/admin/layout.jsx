'use client'
import { useState } from "react"
import AdminSideBar from "@/components/AdminSideBar"
import AdminNavbar from "@/components/AdminNavBar"

export default function AdminLayout({children}) {
    
    const [active, setActive] = useState(false)

    const updateActive = (activeState) => {
        setActive(activeState);
    }

    return (
        <div>
            <AdminSideBar activeUpdate={updateActive} data={active} />
            <AdminNavbar activeUpdate={updateActive}/>
            <div className="absolute max-lg:top-[5%] top-[10%] left-[20%] py-8 max-lg:px-4 px-8 w-[80%] max-lg:w-[100%] max-lg:left-0 pb-5 bg-slate-100">
                {children}
            </div>
        </div>
    )
}