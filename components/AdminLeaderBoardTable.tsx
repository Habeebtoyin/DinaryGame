import { trimWalletAddress } from "@/helper/trim";
import { GameContext } from "@/hooks/GameContext";
import useClaimNfts from "@/hooks/useClaimNfts";
import { useContext, useEffect, useState } from "react";

const AdminLeaderBoardTable = ({ data, title }: any) => {
	const { userGameData } = useContext(GameContext);
	const [sortedData, setSortedData] = useState([]);

	useEffect(() => {
		// setInterval(async () => {
		if (data) {
			setSortedData(data);
		}

		//console.log(data);
		//}, 1000);
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
						{sortedData != null ? (
							sortedData.map((detail: any, index: any) => (
								<tr className="p-2" key={index}>
									<td className="text-center py-4 max-lg:border-r">
										{index + 1}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{"Denary"}
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
										{detail.masterBalance}
									</td>
									<td className="text-center py-4 ">
										{detail.masterBalance}
									</td>
								</tr>
							))
						) : (
							<>Data not Found</>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminLeaderBoardTable;
