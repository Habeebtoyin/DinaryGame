
"use client"
import DashboardCards from "../../components/DashboardCards"
import Activities from "../../components/Activities"
import UseAuth from "@/hooks/UseAuth"
const Dashboard = () => {
    UseAuth()
    return (
        <div>
            <DashboardCards /> 
            <Activities />
        </div>
    )
}

export default Dashboard