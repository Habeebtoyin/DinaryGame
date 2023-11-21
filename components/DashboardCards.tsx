import { useConnect } from "wagmi";
import DashboardCard from "./DashboardCard";
import { GameContext } from "@/hooks/GameContext";
import { useContext, useState, useEffect } from "react";
import { redirect } from "next/navigation";
import UseAuth from "@/hooks/UseAuth";
import useClaimNfts from "@/hooks/useClaimNfts";
import ModalContainer from "./modal/ModalContainer";
import { toast } from "react-toastify";
const DashboardCards = () => {
	const [isMaster, setMaster] = useState(false);
	const [isLegend, setLegend] = useState(false);
	const [isMasterBurn, setMasterBurn] = useState(false);
	const [isNftMintable, setNftMintable] = useState(false);
	const [masterBalance, setMasterBalance] = useState(0);
	const [legendBalance, setLegendBalance] = useState(0);
	UseAuth();

	const {
		userGameData,
		setUserGameData,
		fetchUserGameData,
		burnMasternftModal,
		setBurnMasterNftModal,
		mintLegendNftModal,
		setMintLegendNftModal,
		mintMasternftModal,
		setMintMasterNftModal,
	} = useContext(GameContext);
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
		console.log({ isLegend });
		if (masterBalance >= 2) {
			setMasterBurn(true);
			setMaster(true);
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
			calls();
			if (userGameData) {
				const { TotalScore } = userGameData;
				console.log(1, { TotalScore });
				if (TotalScore && parseInt(TotalScore) >= 500) {
					console.log("true");
					setNftMintable(true);
				} else {
					console.log("false");
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

			console.log();
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
					linkTitle={
						isNftMintable && isMaster == false
							? "Claim Indices Master NFT"
							: ""
					}
					callFunction={async () => setMintMasterNftModal(true)}
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
					callFunction={
						isMasterBurn ? () => setBurnMasterNftModal(true) : ""
					}
				/>

				<DashboardCard
					heading={"Legendary NFT"}
					image={"/assets/images/Vector.png"}
					amount={legendBalance}
					linkTitle={isLegend ? "Mint 1 NFT" : ""}
					callFunction={
						isLegend
							? async () => {
									setMintLegendNftModal(true);
							  }
							: () => null
					}
					link={""}
				/>
			</div>
			{mintLegendNftModal || mintMasternftModal || burnMasternftModal ? (
				<ModalContainer />
			) : (
				<></>
			)}
		</div>
	);
};

export default DashboardCards;
