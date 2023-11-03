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
    
	const pathname = usePathname();

    const toggleDropdown = () => {
      setActive((prev) => !prev);
    }

    const togglePlayDropdown = () => {
      setPlayDropdown((prev) => !prev);
    }
	UseAuth()
	
	

	return (
		<header className="header fixed top-0 right-0 left-0 border-b z-10 bg-white flex justify-between items-center px-[10%] py-2">
			<div className="left w-[23%] flex items-center">
				<div className="logo">
					<Image
						src="/assets/images/indices-logo.png"
						alt="Dyelum Logo"
						width={150}
						height={150}
					/>
				</div>
			</div>

			<div className="desktop middle w-[50%] flex justify-around">
				<Link className={`link hover:text-[#0045AD] ${pathname === '/' ? 'text-[#0045AD]' : ''}`} href="/">Home</Link>
				<div className="relative link flex items-center hover:text-[#0045AD] cursor-pointer">Play <i className="bx bx-chevron-down text-[1.2rem] ml-2" onClick={togglePlayDropdown}></i>
					
					{
					playDropdown && 
					<div className="absolute top-[120%] bg-white border w-[12rem] rounded-md">
						<Link href="/denary" className="block px-4 py-2 border-b hover:bg-[#0045AD] hover:text-white" onClick={togglePlayDropdown}>Denary</Link>
						<Link href="/pvp" className="block px-4 py-2 border-b hover:bg-[#0045AD] hover:text-white" onClick={togglePlayDropdown}>Player to Player</Link>
						<Link href="/endless" className="block px-4 py-2 border-b mb-2 hover:bg-[#0045AD] hover:text-white" onClick={togglePlayDropdown}>Endless Mode</Link>
					</div>
					}

				</div>
				<Link className={`link hover:text-[#0045AD] ${pathname === '/about' ? 'text-[#0045AD]' : ''}`} href="/">About</Link>
				<Link className={`link hover:text-[#0045AD] ${pathname === '/leaderboard' ? 'text-[#0045AD]' : ''}`} href="/leaderboard">Leaderboard</Link>
				</div>

			{
			active && 
			<div className="mobile middle w-[50%] flex justify-around">
				<Link className={`link hover:text-[#0045AD] ${pathname === '/' ? 'text-[#0045AD]' : ''}`} href="/" onClick={toggleDropdown}>Home</Link>
				<Link className={`link hover:text-[#0045AD] ${pathname === '/play' ? 'text-[#0045AD]' : ''}`} href="/play" onClick={toggleDropdown}>Play</Link>
				<Link className={`link hover:text-[#0045AD] ${pathname === '/about' ? 'text-[#0045AD]' : ''}`} href="/" onClick={toggleDropdown}>About</Link>
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
