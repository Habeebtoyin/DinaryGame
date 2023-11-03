import AdminPopularGames from "@/components/AdminPopularGames"
import AdminPlayers from "@/components/AdminPlayers"
import AdminNFT from "@/components/AdminNFT"
import AdminNotifications from "@/components/AdminNotifications"
import AdminChart from "@/components/AdminChart"


const AdminOverview = () => {
    return(
        <div>
            <div className="flex justify-between max-lg:flex-col max-lg:gap-4">
                <AdminPopularGames />
                <AdminPlayers />
                <AdminNFT />
            </div>

            <div className="mt-6 flex justify-between max-lg:flex-col max-lg:gap-4">
                <AdminChart />
                <AdminNotifications />
            </div>
        </div>
    )
}

export default AdminOverview