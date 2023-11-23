import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="bg-[#E5EFFF] flex justify-between items-center px-[10%] py-6 max-lg:flex-col">
			<div className="left max-lg:w-[100%] w-[23%] flex">
				<div className="logo">
					<Link href="/">
						<Image
							src="/assets/images/indices-logo.png"
							alt="Dyleum Logo"
							width={150}
							height={150}
						/>
					</Link>
				</div>
				{/* <div className="logo-details ml-2 max-lg: w-[80%]">
                    <h3 className="font-bold text-[1.3rem]">Indices</h3>
                    <div className='flex'>
                        <p className="text-xs">Powered by</p>
                        <Image className="mx-1" src="/assets/images/icon1.png" alt="Dyleum Logo" width={20} height={1}/>
                        <p className="text-xs">Dyleum</p> 
                    </div>
                </div> */}
			</div>

			<div className="max-lg:w-[100%] w-[50%] flex justify-around max-lg:my-2">
				<Link href="/" className="">
					Home
				</Link>
				<Link href="/play" className="">
					Play
				</Link>
				<Link href="/" className="">
					About
				</Link>
				<Link href="/leaderboard" className="">
					Leaderboard
				</Link>
			</div>

			<div className="right max-lg:w-[100%] w-[23%] flex max-lg:justify-center justify-end">
				<p className="text-[#464D59]">Powered by Dyleum</p>
			</div>
		</div>
	);
};

export default Footer;
