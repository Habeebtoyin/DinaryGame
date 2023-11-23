"use client";
import { Component } from "react";
import AdminNotificationsDetails from "@/data/AdminNotificationsDetails";
import Image from "next/image";

class AdminNotifications extends Component {
	constructor() {
		super();

		this.state = {
			data: AdminNotificationsDetails,
		};
	}

	render() {
		const { data } = this.state;

		return (
			<div className="p-3 max-lg:w-[100%] w-[40%]">
				<div className="flex justify-between items-center mb-3">
					<h3 className="font-bold text-[1.2rem]">Notifications</h3>
					<p className="text-[1.1rem] text-[#0045AD]">view all</p>
				</div>

				{data.map((notification) => (
					<div key={notification.id} className="my-5">
						<div className="flex justify-between items-start">
							<div className="w-[10%]">
								<Image
									src={notification.image}
									alt="Dyleum Logo"
									width={30}
									height={30}
									className="rounded-sm mt-[.2em]"
								/>
							</div>
							<div className="w-[85%]">
								<p className="font-bold">
									{notification.title}
								</p>
								<p className="text-[#6E7887]">
									{notification.date}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default AdminNotifications;
