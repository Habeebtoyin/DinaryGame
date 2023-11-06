
import { useConnect } from 'wagmi'
import DashboardCard from './DashboardCard'
 import { GameContext } from '@/hooks/GameContext'
import { useContext } from 'react'
import UseAuth from '@/hooks/UseAuth'

const DashboardCards = () => {
     UseAuth()
    const {userGameData}=useContext(GameContext)
    return (
        <div className="px-[10%] max-lg:px-[5%] max-lg:pt-[3rem] pt-[5rem] pb-[3rem] bg-[#E5EFFF]">
            <div className="py-[1em] grid max-lg:grid-cols-1 grid-cols-3 gap-6 my-[1em]">
                {console.log(userGameData)}
                <DashboardCard heading={"Your Total Score"} image={"/assets/images/Vector1.png"} amount={userGameData.TotalScore?userGameData.TotalScore:0} linkTitle={""} link={"/"} />
                <DashboardCard heading={"Master NFT"} image={"/assets/images/Vector.png"} amount={userGameData.nftReward.masterNftAmount} linkTitle={"Burn NFT"} link={"/"} />
                <DashboardCard heading={"Legendary NFT"} image={"/assets/images/Vector.png"} amount={userGameData.nftReward.legendaryNftamount} linkTitle={""} link={"/"}/>
            </div>
        </div>
    )
}

export default DashboardCards