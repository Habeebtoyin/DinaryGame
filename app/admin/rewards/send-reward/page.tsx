"use client";
import useTransferNft from "@/hooks/useTransferNft";
import useUpdateUserOnGameOver from "@/hooks/useUpdateUserOnGameOver";
import Link from "next/link";
import { GameContext } from "@/hooks/GameContext";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import useAuthAdmin from "@/hooks/useAuthAdmin";
import { Token__factory } from "@/types/contracts";
import { useEthersSigner } from "@/sdk/ethersAdapter";
import { parseEther } from "ethers";
import { ETH } from "@/sdk/config";
const AdminSendRewardForm = () => {
	const signer = useEthersSigner();
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState();
	const { authUserForSending, reqOnlyAdminAddress } = useAuthAdmin();
	const [to, setTo] = useState();
	const [amount, SetAmount] = useState();
	const [nftType, setNftType] = useState();
	const [selectedValue, setSelectedValue] = useState("");

	const handleSelectChange = (event: any) => {
		setSelectedValue(event.target.value);
	};

	async function handleSendReward(_to: any, _amount: any) {
		const token = Token__factory.connect(ETH, signer);
		return await token
			.transfer(_to, parseEther(_amount))
			.then((res) => {
				toast.success("Reward transferrred Succedfully");
			})
			.catch((err) => {
				toast.error("unable to Reward Chain Error");
			});
	}

	reqOnlyAdminAddress();

	return (
		<div className="relative text-white flex items-center justify-center">
			<form
				action=""
				className="my-5 bg-white text-black max-lg:w-[100%] w-[40%] p-4 rounded-[5px]"
			>
				<div className="my-6">
					<h1 className="font-bold text-[2rem]">Send Reward</h1>
				</div>

				<div>
					<div className="mb-3">
						<label className="block mb-2 font-semibold text-[1.2rem]">
							Wallet Address
						</label>
						<input
							onChange={(e: any) => setTo(e.target.value)}
							placeholder="Enter the recepient wallet address"
							type="text"
							className="border border-black w-[100%] p-3 rounded-[3px] outline-none"
						/>
					</div>

					<div className="mb-3">
						<label className="block mb-2 font-semibold text-[1.2rem]">
							Reward Type
						</label>
						<select
							name=""
							id=""
							value={selectedValue}
							onChange={handleSelectChange}
							placeholder="Select the Reward Type"
							className="border border-black w-[100%] p-3 rounded-[3px] outline-none"
						>
							<option value="BTC">BTC</option>
							<option value="ETH">ETH</option>
						</select>
					</div>

					<div className="mb-3">
						<label className="block mb-2 font-semibold text-[1.2rem]">
							Reward Quantity
						</label>
						<input
							onChange={(e: any) => SetAmount(e.target.value)}
							placeholder="Enter the reward quantity"
							type="text"
							className="border border-black w-[100%] p-3 rounded-[3px] outline-none"
						/>
					</div>

					<div className="my-6">
						<input
							onClick={async () => {
								if (!to || !amount) {
									toast.error(" reciever and Amount Missing");
								} else {
									await handleSendReward(to, amount);
								}
							}}
							type="button"
							value="Send"
							className="block w-[100%] text-white my-[1rem] bg-[#0045AD] px-5 py-3 rounded-[4px]"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AdminSendRewardForm;
