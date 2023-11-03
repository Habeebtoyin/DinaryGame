'use client'
import { usePathname } from "next/navigation"

const AdminNavBarTitle = () => {
    
    const pathname = usePathname();

    const getPageTitle = () => {
        switch (pathname) {
            case '/admin/overview':
                return "Good Morning Samuel";

            case '/admin/leaderboard' :
                return "Leaderboard";

            case '/admin/nft-minting' :
                return "NFT Minting & Claiming";

            case '/admin/rewards' :
                return "Rewards Sending";

            case '/admin/rewards/send-reward' :
                return "Send Reward";

            case '/admin/bug-reporting' :
                return "Bug Reporting";

            default:
                return "Admin Dashboard"
        }
    }

    const getPageSubTitle = () => {
        switch (pathname) {
            case '/admin/overview':
                return "Hope you have a good day?";

            case '/admin/leaderboard' :
                return "";

            case '/admin/nft-minting' :
                return "";

            case '/admin/reward' :
                return "";

            case '/admin/bug-reporting' :
                return "";
                    
            default:
                return ""
        }
    }
    
    return (
        <div className="w-[50%] max-lg:w-[100%]">
            <h1 className="font-bold text-[2rem] max-lg:text-[1.5rem]">{getPageTitle()}</h1>
            <p className="text-[#6E7887] text-[.9rem]">{getPageSubTitle()}</p>
        </div>
    )
}

export default AdminNavBarTitle