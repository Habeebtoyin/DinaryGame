import Image from "next/image";

const AdminPlayers = () => {
	return (
		<div className="bg-white border border-slate-300 p-5 rounded-[5px] w-[33%] max-lg:w-[100%]">
			<div className="flex justify-between mb-3">
				<h1 className="font-bold text-[1.2rem]">Players</h1>
				<p className="text-[#6E7887]">Aug25-Sept25</p>
			</div>

			<div className="flex justify-between">
				<div className="flex flex-col gap-6">
					<div>
						<div className="flex items-center">
							<div className="bg-[#F87171] h-[10px] w-[10px] rounded-[50%] mr-1"></div>
							<p>Inactive</p>
						</div>
						<p className="font-bold">254</p>
					</div>

					<div>
						<div className="flex items-center">
							<div className="bg-[#34D399] h-[10px] w-[10px] rounded-[50%] mr-1"></div>
							<p>Active</p>
						</div>
						<p className="font-bold">3000</p>
					</div>

					<div>
						<div className="flex items-center">
							<div className="bg-[#0045AD] h-[10px] w-[10px] rounded-[50%] mr-1"></div>
							<p>Total</p>
						</div>
						<p className="font-bold">3254</p>
					</div>
				</div>

				<div>
					<Image
						src="/assets/images/chart.png"
						alt="Dyleum Logo"
						width={150}
						height={150}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdminPlayers;
