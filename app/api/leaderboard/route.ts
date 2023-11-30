import { NextResponse, NextRequest } from "next/server";
import { getAllTimeLeaderBoardSnapshot } from "@/sdk/api";

export async function GET() {
	try {
		const res = (await getAllTimeLeaderBoardSnapshot())
			.TransactionsSnapShot;
		return NextResponse.json(res);
	} catch (error) {
		console.log({ error });
		return NextResponse.json({ error });
	}
}
