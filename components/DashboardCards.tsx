import { useConnect } from "wagmi";
import DashboardCard from "./DashboardCard";
import { GameContext } from "@/hooks/GameContext";
import { useContext, useState, useEffect } from "react";
import { redirect } from "next/navigation";
import UseAuth from "@/hooks/UseAuth";
import useClaimNfts from "@/hooks/useClaimNfts";
import { toast } from "react-toastify";
const DashboardCards = () => {
	const [isMaster, setMaster] = useState(false);
	const [isLegend, setLegend] = useState(false);
	const [isMasterBurn, setMasterBurn] = useState(false);
	const [isNftMintable, setNftMintable] = useState(false);
	const [masterBalance, setMasterBalance] = useState(0);
	const [legendBalance, setLegendBalance] = useState(0);
	UseAuth();

	const { userGameData, setUserGameData, fetchUserGameData } =
		useContext(GameContext);
	const {
		claimLegendNft,
		claimMasterNft,
		LegendNftBalance,
		MasternftBalance,
		error,
		isLoading,
		isSucess,
		burnNft,
	} = useClaimNfts(userGameData);
	useEffect(() => {
		console.log({ masterBalance });
		if (masterBalance == 2) {
			setMasterBurn(true);
		} else {
			setMasterBurn(false);
		}
		if (
			userGameData.nftReward &&
			JSON.parse(userGameData.nftReward.masterNftBurnt)
		) {
			setLegend(JSON.parse(userGameData.nftReward.masterNftBurnt));
		} else {
			setLegend(false);
		}
	}, [masterBalance, isLegend, legendBalance, isMasterBurn, isNftMintable]);
	const calls = async () => {
		const data = await fetchUserGameData(userGameData.walletAddress);
		setUserGameData(data);
	};
	useEffect(() => {
		calls();
	}, [isLegend, isMasterBurn, isNftMintable]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (userGameData) {
				const { TotalScore } = userGameData;
				console.log({ TotalScore });
				if (TotalScore && parseInt(TotalScore) >= 50) {
					setNftMintable(true);
				} else {
					setNftMintable(false);
				}
			}
			LegendNftBalance().then((res) => {
				setLegendBalance(parseInt(res.toString()));
			});
			MasternftBalance().then((res) => {
				console.log({ res });
				setMasterBalance(parseInt(res.toString()));
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	if (!userGameData) {
		redirect("/");
	}
	return (
		<div className="px-[10%] max-lg:px-[5%] max-lg:pt-[3rem] pt-[5rem] pb-[3rem] bg-[#E5EFFF]">
			<div className="py-[1em] grid max-lg:grid-cols-1 grid-cols-3 gap-6 my-[1em]">
				<DashboardCard
					heading={"Your Total Score"}
					image={"/assets/images/Vector1.png"}
					amount={
						userGameData.TotalScore ? userGameData.TotalScore : 0
					}
					linkTitle={isNftMintable ? "Claim Master Nft" : ""}
					callFunction={async () =>
						await claimMasterNft().then((res) => {
							console.log({ isNftMintable });
							setMasterBurn(!isNftMintable);
							return res;
						})
					}
					link={""}
				/>
				<DashboardCard
					heading={"Master NFT"}
					image={"/assets/images/Vector.png"}
					amount={masterBalance}
					linkTitle={isMasterBurn == true ? "Burn NFT" : ""}
					link={() => {
						if (userGameData.nftReward) return "";
						return null;
					}}
					callFunction={isMasterBurn ? () => burnNft() : ""}
				/>
				<DashboardCard
					heading={"Legendary NFT"}
					image={"/assets/images/Vector.png"}
					amount={legendBalance}
					linkTitle={isLegend ? "Claim Legend Nft" : ""}
					callFunction={isLegend && claimLegendNft}
					link={""}
				/>
			</div>
			{/* {isSucess && toast.success("Transaction Successful")} */}
		</div>
	);
};

export default DashboardCards;
