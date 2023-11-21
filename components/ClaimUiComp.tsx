import Image from "next/image";
import Link from "next/link";

const ClaimUiComp = ({
	title,
	desc,
	linkName,
	actionFunction,
	image,
}: {
	title: string;
	desc: string;
	linkName: string;
	actionFunction: any;
	image: string;
}) => {
	return (
		<div className="flex flex-col gap-3 items-center bg-white text-center max-lg:p-4 p-9 rounded-[5px]">
			<div>
				{image && (
					<Image
						src="/assets/images/Frame82.png"
						alt="Dyelum img"
						width={80}
						height={80}
						className="rounded-sm mt-[.2em]"
					/>
				)}
			</div>

			<h1 className="font-bold text-[1.2rem]">{title}</h1>

			<p className="text-[#6E7887]">{desc}</p>

			{linkName && (
				<div className="flex justify-start mt-3 ">
					<button
						onClick={() => actionFunction()}
						className="bg-[#0045AD] flex align-middle text-white px-5 py-2 rounded-[4px]"
					>
						{linkName}
					</button>
				</div>
			)}
		</div>
	);
};

export default ClaimUiComp;
