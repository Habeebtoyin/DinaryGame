"use client";
import { useState, useEffect } from "react";
import AdminSideBar from "@/components/AdminSideBar";
import AdminNavbar from "@/components/AdminNavBar";
import useAuthAdmin from "@/hooks/useAuthAdmin";
import { useAccount } from "wagmi";
import { redirect } from "next/navigation";
export default function AdminLayout({ children }) {
	const { reqOnlyAdminAddress } = useAuthAdmin();
	const { address, isConnected } = useAccount();
	const [active, setActive] = useState(false);

	const updateActive = (activeState) => {
		setActive(activeState);
	};
	useEffect(() => {
		const admins = [
			"0xF29828D87487948bf4b733B7F018c63Ede2e9fA1",
			"0xB489756E7A85B28726B8959AbF94d3EbC6b1B919",
			"0x829ceb39FeE0155d63530de02450AbC3b6652602",
			"0xF29828D87487948bf4b733B7F018c63Ede2e9fA1",
		];
		if (isConnected) {
			if (
				address === admins[0] ||
				address === admins[1] ||
				address === admins[2] ||
				address === admins[3]
			) {
				//	console.log({ admins, address });
				//redirect("/");
			} else {
				redirect("/");
			}
		} else {
			console.log("worker");
			redirect("/");
		}
	}, []);

	return (
		<div>
			<AdminSideBar activeUpdate={updateActive} data={active} />
			<AdminNavbar activeUpdate={updateActive} />
			<div className="absolute max-lg:top-[5%] top-[10%] left-[20%] py-8 max-lg:px-4 px-8 w-[80%] max-lg:w-[100%] max-lg:left-0 pb-5 bg-slate-100">
				{children}
			</div>
		</div>
	);
}
