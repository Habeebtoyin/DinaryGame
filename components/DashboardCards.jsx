import DashboardCard from './DashboardCard'

const DashboardCards = () => {
    return (
        <div className="px-[10%] max-lg:px-[5%] max-lg:pt-[3rem] pt-[5rem] pb-[3rem] bg-[#E5EFFF]">
            <div className="py-[1em] grid max-lg:grid-cols-1 grid-cols-3 gap-6 my-[1em]">
                <DashboardCard heading={"Your Total Score"} image={"/assets/images/Vector1.png"} amount={"30,000,000"} linkTitle={"Mint Indices Master NFT"} link={"/"} />
                <DashboardCard heading={"Master NFT"} image={"/assets/images/Vector.png"} amount={"3"} linkTitle={"Burn NFT"} link={"/"} />
                <DashboardCard heading={"Legendary NFT"} image={"/assets/images/Vector.png"} amount={"0"} linkTitle={""} link={"/"}/>
            </div>
        </div>
    )
}

export default DashboardCards