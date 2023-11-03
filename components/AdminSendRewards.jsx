import Link from "next/link";

const AdminSendRewards = () => {
    return (
        <div className="flex justify-between mt-6 max-lg:flex-col">
            <div className="">
                <h3 className="font-bold text-[1.2rem]">Looking out to send a reward?</h3>
                <p className="text-[#6E7887]">Distrubute rewards and incentives to users or players registered within the system</p>
            </div>

            <div className="flex justify-start mt-3 ">
                <Link href="/admin/rewards/send-reward" className='bg-[#0045AD] flex align-middle text-white px-5 py-2 rounded-[4px]'>Send Reward</Link>
            </div>

        </div>
    )
}

export default AdminSendRewards