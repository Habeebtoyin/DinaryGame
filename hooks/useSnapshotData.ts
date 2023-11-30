import React, { useEffect, useState } from "react";
import {
	getAllTimeLeaderBoardSnapshot,
	getLeaderBoardforTime,
} from "@/sdk/api";
import useSWR from "swr";
const fetcher = (time: string) =>
	getLeaderBoardforTime(time).then((res) => res);
export default function useSnapshotData(time: string) {
	const { data, error, isLoading } = useSWR(`${time}`, fetcher);

	return { data, error, isLoading };
}
