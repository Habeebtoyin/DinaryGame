import React, { useEffect, useState } from "react";
import {
	getAllTimeLeaderBoardSnapshot,
	getLeaderBoardforTime,
	getRewardBoardforTime,
} from "@/sdk/api";
import useSWR from "swr";
const fetcher = (time: string) =>
	getRewardBoardforTime(time).then((res) => res);
export default function useRewardsData(time: string) {
	const { data, error, isLoading } = useSWR(`${time}`, fetcher);
	console.log("rewrads", { data });

	return { data, error, isLoading };
}
