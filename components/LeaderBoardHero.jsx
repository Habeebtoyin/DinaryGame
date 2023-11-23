import Image from "next/image";

const LeaderBoardHero = () => {
	return (
		<div>
			<div className="play hero max-lg:mt-[2rem] mt-[3.7rem] relative bg-[#E5EFFF] text-white max-lg:min-h-[50vh] min-h-[30vw] flex flex-col items-center justify-center">
				<div className="image">
					<Image
						src="/assets/images/leaderboard.png"
						alt="Dyleum Logo"
						width={70}
						height={70}
					/>
				</div>
				<h1 className="text-[3rem] text-black font-bold my-4">
					Indices Leaderboard
				</h1>
			</div>
		</div>
	);
};

export default LeaderBoardHero;
