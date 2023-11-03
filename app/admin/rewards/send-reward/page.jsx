import Link from "next/link"
const AdminSendRewardForm = () => {
    return (
        <div className="relative text-white flex items-center justify-center">
            <form action="" className="my-5 bg-white text-black max-lg:w-[100%] w-[40%] p-4 rounded-[5px]">
                
                <div className="my-6">
                    <h1 className="font-bold text-[2rem]">Send Reward</h1>
                </div>

                <div>
                    <div className="mb-3">
                        <label className="block mb-2 font-semibold text-[1.2rem]" >Wallet Address</label>
                        <input placeholder="Enter the recepient wallet address" type="text" className="border border-black w-[100%] p-3 rounded-[3px] outline-none" />
                    </div>

                    <div className="mb-3">
                        <label className="block mb-2 font-semibold text-[1.2rem]" >Reward Type</label>
                        <select name="" id="" placeholder="Select the Reward Type" className="border border-black w-[100%] p-3 rounded-[3px] outline-none">
                            <option value="NFT">NFT</option>
                            <option value="ZBC">ZBC</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="LEUM">LEUM</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="block mb-2 font-semibold text-[1.2rem]" >Reward Quantity</label>
                        <input placeholder="Enter the reward quantity" type="text" className="border border-black w-[100%] p-3 rounded-[3px] outline-none" />
                    </div>

                    <div className="my-6">
                        <input type="submit" value="Send" className="block w-[100%] text-white my-[1rem] bg-[#0045AD] px-5 py-3 rounded-[4px]"/>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AdminSendRewardForm