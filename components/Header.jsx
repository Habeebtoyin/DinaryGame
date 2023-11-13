"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import UseAuth from "@/hooks/UseAuth";

const Header = () => {
	const [active, setActive] = useState(false);
    const [playDropdown, setPlayDropdown] = useState(false);
	const [playDropdownMobile, setPlayDropdownMobile] = useState(false);
    
	const pathname = usePathname();

    const toggleDropdown = () => {
      setActive((prev) => !prev);
    }

    const togglePlayDropdown = () => {
      setPlayDropdown((prev) => !prev);
    }

	const togglePlayDropdownMobile = () => {
		setPlayDropdownMobile((prev) => !prev);
	  }
	UseAuth()
	
	

	return (
		<header className="header fixed top-0 right-0 left-0 border-b z-10 bg-white flex justify-between items-center px-[10%] py-2">
			<div className="left w-[23%] flex items-center">
				<div className="logo">
				<Link href="/" >
				<Image
						src="/assets/images/indices-logo.png"
						alt="Dyelum Logo"
						width={150}
						height={150}
					/>
					</Link>
					
				</div>
			</div>

			<div className="desktop middle w-[50%] flex justify-around">
				<Link className={`link hover:text-[#0045AD] ${pathname === '/' ? 'text-[#0045AD]' : ''}`} href="/">Home</Link>
				<div className="relative link flex items-center">Play <i className="bx bx-chevron-down text-[1.2rem] ml-2" onClick={togglePlayDropdown}></i>
					
					{
					playDropdown && 
					<div className="absolute top-[120%] bg-white border w-[12rem] rounded-md">
						<Link href="/denary" className="block px-4 py-2 border-b hover:bg-[#0045AD] hover:text-white" onClick={togglePlayDropdown}>Denary</Link>
						{/* <Link href="/pvp" className="block px-4 py-2 border-b hover:bg-[#0045AD] hover:text-white" onClick={togglePlayDropdown}>Player to Player</Link>
						<Link href="/endless" className="block px-4 py-2 border-b mb-2 hover:bg-[#0045AD] hover:text-white" onClick={togglePlayDropdown}>Endless Mode</Link> */}
						<p className="block px-4 py-2 border-b">Player to Player</p>
						<p className="block px-4 py-2 border-b">Endless Mode</p>
					</div>
					}

				</div>
				<Link className={`link hover:text-[#0045AD] ${pathname === '/about' ? 'text-[#0045AD]' : ''}`} href="/about">About</Link>
				<Link className={`link hover:text-[#0045AD] ${pathname === '/leaderboard' ? 'text-[#0045AD]' : ''}`} href="/leaderboard">Leaderboard</Link>
				</div>

			{
			active && 
			<div className="mobile middle w-[50%] flex justify-around">
				<Link className={`link hover:text-[#0045AD] ${pathname === '/' ? 'text-[#0045AD]' : ''}`} href="/" onClick={toggleDropdown}>Home</Link>
				<div className={`link relative hover:text-[#0045AD] ${pathname === '/denary' ? 'text-[#0045AD]' : ''}`}>Play <i className="bx bx-chevron-down text-[1.2rem] ml-2" onClick={togglePlayDropdownMobile}></i>
					{
						playDropdownMobile && 
						<div className="absolute top-[30%] right-[10%] bg-white border w-[12rem] rounded-md">
							<Link href="/denary" className="block px-4 py-2 border-b hover:bg-[#0045AD] hover:text-white" onClick={toggleDropdown}>Denary</Link>
							{/* <Link href="/pvp" className="block px-4 py-2 border-b hover:bg-[#0045AD] hover:text-white" onClick={toggleDropdown}>Player to Player</Link>
							<Link href="/endless" className="block px-4 py-2 border-b mb-2 hover:bg-[#0045AD] hover:text-white" onClick={toggleDropdown}>Endless Mode</Link> */}
							<p className="block px-4 py-2 border-b">Player to Player</p>
							<p className="block px-4 py-2 border-b">Endless Mode</p>
						</div>
					}
				</div>
				<Link className={`link hover:text-[#0045AD] ${pathname === '/about' ? 'text-[#0045AD]' : ''}`} href="/about" onClick={toggleDropdown}>About</Link>
				<Link className={`link hover:text-[#0045AD] ${pathname === '/leaderboard' ? 'text-[#0045AD]' : ''}`} href="/leaderboard" onClick={toggleDropdown}>Leaderboard</Link>
			</div>
			}

			<div className="right flex justify-end">
				<ConnectButton />
			</div>

			<div className="mobile text-[1.7rem]" onClick={toggleDropdown}>
				<i className="bx bx-menu"></i>
			</div>
		</header>
	);
};

export default Header;
