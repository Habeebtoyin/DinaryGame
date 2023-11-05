import { trimWalletAddress } from "@/helper/trim"

const LeaderBoardTab = ({ id,  Score, walletAddress }) => {
    console.log({ id,  Score, walletAddress })
    return(
        <div className="rank flex justify-between px-[5%] items-center pb-8 mb-8">
            <div className="left flex w-[30%] justify-between items-center">
                <p className="font-bold">{id+1}</p>
                <p className="bg-[#0045AD] text-white max-lg:py-1 py-3 px-1 rounded-sm">{"2048"}</p>
                <div className="score flex">
                    <p className="font-bold">Score: </p>
                    <p className="ml-1">{Score}</p>
                </div>
            </div>
            <div className="right flex justify-end items-center w-[45%]">
                <p>{ trimWalletAddress(walletAddress)}</p>
            </div>
        </div>
    )
}

export default LeaderBoardTab