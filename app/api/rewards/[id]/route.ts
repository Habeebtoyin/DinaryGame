import { getAllTimeLeaderBoardSnapshot } from "@/sdk/api";
import { LEGENDRY_NFT, MASTER_NFT } from "@/sdk/config";
import { SoulBound__factory } from "@/types/contracts";
import { NextResponse } from "next/server";
import { ethers } from "ethers";

const JsonProvider = new ethers.JsonRpcProvider(
	"https://base-sepolia-rpc.publicnode.com"
);

const MasterFactory = SoulBound__factory.connect(MASTER_NFT, JsonProvider);
const LegendaryFactory = SoulBound__factory.connect(LEGENDRY_NFT, JsonProvider);
function handleTime(epochTime: number) {
	const date = new Date(epochTime * 1000);

	// Get the components (day, month, year, hours, minutes, seconds)
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
	const year = date.getFullYear().toString().slice(-2);
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	const seconds = date.getSeconds().toString().padStart(2, "0");
	const formattedDate = `${day}-${month}-${year}`;
	const formattedTime = `${hours}:${minutes}:${seconds}`;

	return { formattedDate, formattedTime };
}
export async function GET(request: Request) {
	const id = request.url.slice(request.url.lastIndexOf("/") + 1);
	console.log(id);
	const denom = 1000 * 60 * 60 * 24;
	try {
		const res: any = (
			await getAllTimeLeaderBoardSnapshot()
		).TransactionsSnapShot?.filter((items) => {
			//console.log(items);
			// console.log(
			// 	"here",
			// 	(parseInt(items.timestamp) / denom).toFixed(0),
			// 	id
			// );
			if (
				(parseInt(items.timestamp) / denom).toFixed(0).toString() == id
			) {
				return items;
			}
		});
		if (res && res.length > 0) {
			let snaps: any[] = res[0].snaps;
			snaps = snaps.filter((e: any) => parseInt(e.Score) > 0);
			snaps.sort(
				(a: any, b: any) => parseInt(b.Score) - parseInt(a.Score)
			);
			//console.log({ snaps });

			snaps = await Promise.all(
				snaps.map(async (gamer) => {
					let rewards = "";
					const masterBalance = await MasterFactory.balanceOf(
						gamer.walletAddress
					)
						.then((res) => res.toString())
						.catch((e) => e);
					// console.log({ masterBalance });
					//get legendBalance
					const legendBalance = await LegendaryFactory.balanceOf(
						gamer.walletAddress
					).then((res) => res.toString());
					//console.log({ masterBalance });
					if (parseInt(legendBalance) == 1) {
						rewards = "1 ETH";
					}
					if (parseInt(legendBalance) == 3) {
						rewards = "3 ETH";
					}
					if (parseInt(legendBalance) >= 5) {
						rewards = "1 BTC";
					}
					const { formattedDate, formattedTime } = handleTime(
						gamer.updated_at
					);
					return {
						...gamer,
						masterBalance: masterBalance,
						legendBalance: legendBalance,
						rewards: rewards,
						time: formattedTime,
						date: formattedDate,
					};
				})
			);
			snaps = snaps.filter((e: any) => parseInt(e.legendBalance) > 0);

			return NextResponse.json({ snaps });
		} else {
			return NextResponse.json({ msg: "Leaderboard not Found " });
		}
	} catch (error) {
		console.log({ error });
		return NextResponse.json({ error }).status;
	}
}
