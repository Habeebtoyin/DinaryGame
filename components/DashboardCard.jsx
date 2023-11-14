import Image from "next/image";
import Link from "next/link";

const DashboardCard = ({ heading, image, amount, linkTitle, link }) => {
	return (
		<div className="game-card shadow-md rounded-[4px] p-6 bg-white">
			<div className="flex justify-between items-center">
				<p className="text-[#464D59]">{heading}</p>
				<Image
					src={image}
					alt="dashboard-card-img"
					width={25}
					height={25}
					className="bg-[#E5EFFF] p-1 rounded-sm"
				/>
			</div>
			<p className="font-bold text-[2rem] my-6">{amount}</p>
			{linkTitle === "" ? (
				""
			) : (
				<button className="inline-block bg-[#0045AD] align-middle text-white px-5 py-2 rounded-[4px]">
					{linkTitle}
				</button>
			)}
		</div>
	);
};

export default DashboardCard;
