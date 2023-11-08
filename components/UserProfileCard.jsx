import Link from "next/link"
import Image from "next/image"

const UserProfileCard = () => {
    return (
        <div className="fixed top-[10%] right-[5%] bg-white border w-[15rem] rounded-md">
            <Link href="/dashboard" className="flex px-4 py-2 items-center text-[#0045AD] border-b hover:bg-[#0045AD] hover:text-white" >
                <Image
                    src="/assets/images/copy.png"
                    alt="dashboard-card-img"
                    width={15}
                    height={15}
                />
                <p className="ml-3">Copy Wallet Address</p>
            </Link>
            <Link href="/" className="flex px-4 py-2 items-center text-[#0045AD] border-b hover:bg-[#0045AD] hover:text-white" >
                <Image
                    src="/assets/images/score.png"
                    alt="dashboard-card-img"
                    width={15}
                    height={15}
                />
                <p className="ml-3">Score & Reward</p>
            </Link>
            <Link href="/" className="flex px-4 py-2 items-center text-[#0045AD] border-b mb-2 hover:bg-[#0045AD] hover:text-white" >
                <Image
                    src="/assets/images/logout.png"
                    alt="dashboard-card-img"
                    width={15}
                    height={15}
                />
                <p className="ml-3">Log out</p>
            </Link>
        </div>
    )
}

export default UserProfileCard