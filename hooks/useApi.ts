import PropTypes, { string } from "prop-types";
import React, { Component } from "react";
import { getSpecificUser, updateUser, createUser } from "@/sdk/api";
export default class useApi {
	//create user only when user does not exist
	async auth(address: string) {
		const userData = await getSpecificUser(address);
		const { error, GamePassUsers } = userData;
		if (!error && GamePassUsers) {
			//console.log({ GamePassUsers });
			if (GamePassUsers?.length < 1) {
				console.log("user is not Authenticated");
				return await createUser({
					moveBought: "0",
					moveUsed: "0",
					walletAddress: address,
					Score: "0",
					lifeTimeScore: 0,
				});
			}
			console.log("user Authenticated");

			return GamePassUsers[0];
		}
	}
	async updateUserGameData(address: any, data: any) {
		try {
			console.log("updated success", { data, address });
			return await updateUser(address, data);
		} catch (error) {
			console.log("parent update call ", { data }, { error });
			return error;
		}
	}
	async fetchUserGameData(address: string) {
		const userData = await getSpecificUser(address);
		const { error, GamePassUsers } = userData;
		if (!error && GamePassUsers && GamePassUsers.length > 0) {
			//	console.log("user Data Fetched");
			//console.log({ GamePassUsers });
			return GamePassUsers[0];
		} else {
			console.log({ error });
			return { error: error, msg: "somthing happened" };
		}
	}
}
