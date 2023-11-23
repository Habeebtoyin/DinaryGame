"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AdminSideBar = ({ data, activeUpdate }) => {
	const pathname = usePathname();

	const toggleDropdown = () => {
		activeUpdate((prev) => !prev);
	};

	return (
		<div>
			<div className="max-lg:hidden flex fixed justify-center py-6 bg-[#0045AD] h-[100%] w-[20%] text-white z-[1000000] max-lg:w-[80%]">
				<div className="">
					<Image
						src="/assets/images/indices-logo2.png"
						alt="Dyleum Logo"
						width={150}
						height={150}
					/>

					<div className="mt-[3em]">
						<Link
							href="/admin/overview"
							className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
								pathname === "/admin/overview"
									? "bg-[#0066FF]"
									: ""
							}`}
						>
							<div className="w-[20%]">
								<Image
									src="/assets/images/Vector6.png"
									alt="Dyleum Logo"
									width={15}
									height={15}
								/>
							</div>
							<p className="w-[75%]">Overview</p>
						</Link>

						<Link
							href="/admin/leaderboard"
							className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
								pathname === "/admin/leaderboard"
									? "bg-[#0066FF]"
									: ""
							}`}
						>
							<div className="w-[20%]">
								<Image
									src="/assets/images/Vector2.png"
									alt="Dyleum Logo"
									width={15}
									height={15}
								/>
							</div>
							<p className="w-[75%]">Leaderboard</p>
						</Link>

						<Link
							href="/admin/nft-minting"
							className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
								pathname === "/admin/nft-minting"
									? "bg-[#0066FF]"
									: ""
							}`}
						>
							<div className="w-[20%]">
								<Image
									src="/assets/images/Vector3.png"
									alt="Dyleum Logo"
									width={15}
									height={15}
								/>
							</div>
							<p className="w-[75%]">NFT Minting</p>
						</Link>

						<Link
							href="/admin/rewards"
							className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
								pathname === "/admin/rewards"
									? "bg-[#0066FF]"
									: ""
							}`}
						>
							<div className="w-[20%]">
								<Image
									src="/assets/images/Vector4.png"
									alt="Dyleum Logo"
									width={15}
									height={15}
								/>
							</div>
							<p className="w-[75%]">Reward</p>
						</Link>

						<Link
							href="/admin/bug-reporting"
							className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
								pathname === "/admin/bug-reporting"
									? "bg-[#0066FF]"
									: ""
							}`}
						>
							<div className="w-[20%]">
								<Image
									src="/assets/images/Vector5.png"
									alt="Dyleum Logo"
									width={15}
									height={15}
								/>
							</div>
							<p className="w-[75%]">BugReporting</p>
						</Link>
					</div>
				</div>
			</div>

			{data && (
				<div className="max-lg:flex hidden fixed justify-center py-6 bg-[#0045AD] h-[100%] w-[20%] text-white z-[1000000] max-lg:w-[80%]">
					<div className="">
						<Image
							src="/assets/images/indices-logo2.png"
							alt="Dyleum Logo"
							width={150}
							height={150}
						/>

						<div className="mt-[3em]">
							<Link
								href="/admin/overview"
								className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
									pathname === "/admin/overview"
										? "bg-[#0066FF]"
										: ""
								}`}
								onClick={toggleDropdown}
							>
								<div className="w-[20%]">
									<Image
										src="/assets/images/Vector6.png"
										alt="Dyleum Logo"
										width={15}
										height={15}
									/>
								</div>
								<p className="w-[75%]">Overview</p>
							</Link>

							<Link
								href="/admin/leaderboard"
								className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
									pathname === "/admin/leaderboard"
										? "bg-[#0066FF]"
										: ""
								}`}
								onClick={toggleDropdown}
							>
								<div className="w-[20%]">
									<Image
										src="/assets/images/Vector2.png"
										alt="Dyleum Logo"
										width={15}
										height={15}
									/>
								</div>
								<p className="w-[75%]">Leaderboard</p>
							</Link>

							<Link
								href="/admin/nft-minting"
								className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
									pathname === "/admin/nft-minting"
										? "bg-[#0066FF]"
										: ""
								}`}
								onClick={toggleDropdown}
							>
								<div className="w-[20%]">
									<Image
										src="/assets/images/Vector3.png"
										alt="Dyleum Logo"
										width={15}
										height={15}
									/>
								</div>
								<p className="w-[75%]">NFT Minting</p>
							</Link>

							<Link
								href="/admin/rewards"
								className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
									pathname === "/admin/rewards"
										? "bg-[#0066FF]"
										: ""
								}`}
								onClick={toggleDropdown}
							>
								<div className="w-[20%]">
									<Image
										src="/assets/images/Vector4.png"
										alt="Dyleum Logo"
										width={15}
										height={15}
									/>
								</div>
								<p className="w-[75%]">Reward</p>
							</Link>

							<Link
								href="/admin/bug-reporting"
								className={`flex items-center my-[1em] py-2 px-3 hover:bg-[#0066FF] rounded-[3px] w-[100%] cursor-pointer ${
									pathname === "/admin/bug-reporting"
										? "bg-[#0066FF]"
										: ""
								}`}
								onClick={toggleDropdown}
							>
								<div className="w-[20%]">
									<Image
										src="/assets/images/Vector5.png"
										alt="Dyleum Logo"
										width={15}
										height={15}
									/>
								</div>
								<p className="w-[75%]">BugReporting</p>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminSideBar;
