import { useConnect } from "wagmi";
import DashboardCard from "./DashboardCard";
import { GameContext } from "@/hooks/GameContext";
import { useContext, useState, useEffect } from "react";
import { redirect } from "next/navigation";
import UseAuth from "@/hooks/UseAuth";

const DashboardCards = () => {
	const [isMaster, setMaster] = useState(false);
	const [isLegend, setLegend] = useState(false);
	const [isNftMintable, setNftMintable] = useState(false);
	UseAuth();

	const { userGameData } = useContext(GameContext);
	useEffect(() => {
		const interval = setInterval(() => {
			if (userGameData) {
				const { TotalScore } = userGameData;
				console.log({ TotalScore });
				if (TotalScore && parseInt(TotalScore) >= 5000000) {
					setNftMintable(true);
				}
			}
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	if (!userGameData) {
		redirect("/");
	}
	return (
		<div className="px-[10%] max-lg:px-[5%] max-lg:pt-[3rem] pt-[5rem] pb-[3rem] bg-[#E5EFFF]">
			<div className="py-[1em] grid max-lg:grid-cols-1 grid-cols-3 gap-6 my-[1em]">
				{/* {console.log(userGameData)} */}
				<DashboardCard
					heading={"Your Total Score"}
					image={"/assets/images/Vector1.png"}
					amount={
						userGameData.TotalScore ? userGameData.TotalScore : 0
					}
					linkTitle={isNftMintable ? "/" : ""}
					link={""}
				/>
				<DashboardCard
					heading={"Master NFT"}
					image={"/assets/images/Vector.png"}
					amount={
						userGameData.nftReward &&
						userGameData.nftReward.masterNftAmount
							? userGameData.nftReward.masterNftAmount
							: 0
					}
					linkTitle={isMaster ? "Burn NFT" : ""}
					link={() => {
						if (userGameData.nftReward) return "";
						return null;
					}}
				/>
				<DashboardCard
					heading={"Legendary NFT"}
					image={"/assets/images/Vector.png"}
					amount={
						userGameData.nftReward &&
						userGameData.nftReward.legendaryNftamount
							? userGameData.nftReward.legendaryNftamount
							: 0
					}
					linkTitle={isLegend ? "/" : ""}
					link={""}
				/>
			</div>
		</div>
	);
};

export default DashboardCards;
