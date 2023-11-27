import { trimWalletAddress } from "@/helper/trim";
import { GameContext } from "@/hooks/GameContext";
import useClaimNfts from "@/hooks/useClaimNfts";
import { useContext, useEffect, useState } from "react";

const AdminLeaderBoardTable = ({ data, title }: any) => {
	const { userGameData } = useContext(GameContext);
	const { userMasterNftBalance, userLegendNftBalance } =
		useClaimNfts(userGameData);

	// async function getLegendBalance(addy:string) {
	// 	return ((await userLegendNftBalance(addy)).toString())
	// }
	const [sortedData, setSortedData]: any = useState<any[]>([]);
	async function handleSnapshotFilter(data: any) {
		if (data) {
			//console.log("data", { data });
			let filteredData = data.filter((el: any) => {
				let snaps = el.snaps;
				snaps = snaps.filter((e: any) => parseInt(e.Score) > 0);

				snaps.sort(
					(a: any, b: any) => parseInt(b.Score) - parseInt(a.Score)
				);
				//	console.log({ snaps });
				setSortedData(snaps);
				return snaps;
			});
			// filteredData.concat(snaps);

			//filteredData = [].concat(...filteredData);
			//	console.log({ filteredData });
			//setSortedData(filteredData[0].snaps.filter((e: any) => parseInt(e.Score) > 0));
			return filteredData;
		}
	}
	useEffect(() => {
		setInterval(async () => {
			const d = await handleSnapshotFilter(data);
			// console.log({ d });
			// if (d) {
			// 	setSortedData(d[0]);
			// }
		}, 10000);
	}, [data]);

	return (
		<div>
			<div className="min-w-full bg-white p-2 px-4 border rounded-[5px] mt-5 max-lg:overflow-scroll">
				<h2 className="font-bold text-[1.2rem]">{title}</h2>
				<table className="min-w-full bg-white p-11 mt-4">
					<thead>
						<tr className="border-b border-gray-300">
							<th className="font-semibold text-[#6E7887] pb-3 px-2">
								Rank
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Game Mode
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Wallet Address
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Score
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Minted Master NFT
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Minted Legendary NFT
							</th>
						</tr>
					</thead>

					<tbody>
						{console.log({ sortedData })}
						{sortedData != null ? (
							sortedData.map((detail: any, index: any) => (
								<tr className="p-2" key={index}>
									<td className="text-center py-4 max-lg:border-r">
										{detail.id}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{"Endless"}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{trimWalletAddress(
											detail.walletAddress
										)}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{detail.Score}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{detail.nftReward
											? detail.nftReward.masterNftAmount
											: 0}
									</td>
									<td className="text-center py-4 ">
										{detail.nftReward
											? detail.nftReward
													.legendaryNftamount
											: 0}
									</td>
								</tr>
							))
						) : (
							<></>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminLeaderBoardTable;
