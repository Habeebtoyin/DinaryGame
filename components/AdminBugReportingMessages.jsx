"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AdminBugReportingDetails from "@/data/AdminBugReportingDetails";

const AdminBugReportingMessages = () => {
	const [originalData, setOriginalData] = useState([]);

	useEffect(() => {
		setOriginalData(AdminBugReportingDetails);
	}, []);

	return (
		<div className="bg-white rounded-[5px] py-2 px-4 border max-lg:w-[100%] w-[50%]">
			<h1 className="font-bold text-[1.2rem] border-b py-3">Messages</h1>

			<div className="mt-3">
				{originalData.map((data) => (
					<div
						key={data.id}
						className="border-b flex justify-between py-3 mb-2"
					>
						<div className="w-[10%]">
							<Image
								src={data.image}
								alt="Dyleum img"
								width={30}
								height={30}
								className="rounded-sm mt-[.2em]"
							/>
						</div>
						<div className="w-[70%]">
							<h2 className="font-bold text-[1.2rem]">
								{data.title}
							</h2>
							<p className="text-[#6E7887]">{data.desc}</p>
						</div>
						<div className="w-[15%]">
							<p className="text-[#6E7887]">{data.date}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminBugReportingMessages;
