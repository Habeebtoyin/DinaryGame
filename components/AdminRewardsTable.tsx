import { trimWalletAddress } from "@/helper/trim";
import { useEffect, useState } from "react";

const AdminRewardsTable = ({ data, title }: any) => {
	const [sortedData, setSortedData] = useState([]);

	useEffect(() => {
		setInterval(async () => {
			if (data) {
				setSortedData(data);
			}

			console.log(data);
		}, 1000);
	}, [data]);

	return (
		<div>
			<div className="min-w-full bg-white p-2 px-4 border rounded-[5px] mt-5 max-lg:overflow-scroll">
				<h2 className="font-bold text-[1.2rem]">{`${title} Rewards`}</h2>
				<table className="min-w-full bg-white p-11 mt-4">
					<thead>
						<tr className="border-b border-gray-300">
							<th className="font-semibold text-[#6E7887] pb-3 px-2">
								S/N
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Wallet Address
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Reward Type
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Quantity
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Status
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Date
							</th>
							<th className="font-semibold text-[#6E7887] pb-3">
								Time
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
										{trimWalletAddress(
											detail.walletAddress
										)}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{"rewrad"}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{0}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{"sent"}
									</td>
									<td className="text-center py-4 max-lg:border-r">
										{"date"}
									</td>
									<td className="text-center py-4 ">
										{"time"}
									</td>
								</tr>
							))
						) : (
							<></>
						)}
						{}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminRewardsTable;
