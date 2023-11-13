"use client";
import React, { Component,useEffect, useState } from "react";
import Link from "next/link";
import LeaderBoardTab from "./LeaderBoardTab";
import LeaderBoardDetails from "@/data/LeaderBoardDetails";
import useLoadLeaderBoard from "@/hooks/useLoadLeaderBoard";

export default function Leaderboard({ title, heading, subheading }) {
	const [leaderboardData,setLeaderBoardData]=useState([])
	const {createLeaderBoard,isLoading} = useLoadLeaderBoard();
	useEffect(() => {
	  
		
		const interval = setInterval(() => { 
            createLeaderBoard().then(res=>{
				setLeaderBoardData(res)
			}) 
        }, 50000)
	  
	}, [isLoading])
	
	 
	return (
		<div className="max-lg:my-[1em] my-[2em] px-[10%] text-center res-pad-in">
			<h1 className="res-font font-bold text-[2.5rem]">{heading}</h1>
			<p>{subheading}</p>

			<div className="max-lg:px-[0] px-[15%] mt-[1em]">
				<div className="shadow-md rounded-[4px] text-left p-5">
					<div className="title mb-4">
						<p className="border-b border-gray-400 pb-1">{title}</p>
					</div>

					<div className="rankings">
						{console.log(isLoading)}
						{leaderboardData.length>0 && leaderboardData &&  leaderboardData !=undefined?leaderboardData.map((el,id) => (
							<>
							{/* {console.log(id,el)} */}
							 <LeaderBoardTab key={id} id={id} Score={el.Score} walletAddress={el.walletAddress} />
							</>
							
						)):<>No Data Found</>}
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-3">
				<Link
					href="#"
					className="bg-white border border-[#0045AD] flex align-middle text-[#0045AD] px-5 py-2 rounded-[4px] hover:bg-[#0045AD] hover:text-white"
				>
					View more
				</Link>
			</div>
		</div>
	);
}

// class Leaderboard extends Component {
//     constructor() {
//         super();

//         this.state = {
//             data: LeaderBoardDetails,
//         }
//     }

//     render()
// }

// export default Leaderboard
