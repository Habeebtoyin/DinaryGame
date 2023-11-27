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
		if (isConnected) {
			const admin = "0x829ceb39FeE0155d63530de02450AbC3b6652602";
			if (
				address !== admin ||
				address !== "0x829ceb39FeE0155d63530de02450AbC3b6652602"
			) {
				console.log(address);
				console.log("yes yes");
				redirect("/");
			}
		} else {
			console.log("clg nonononon ");
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
