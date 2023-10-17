'use client'
import { useState } from "react"
import { useConnect,useAccount } from 'wagmi'
import BoardView from "./Board";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContext } from "react";
import { GameContext } from "@/hooks/GameContext";
const GameInfo = () => {
    const [game, setGame] = useState(false);
    const {isConnected}=useAccount()
    const {userGameData}=useContext(GameContext)

    const selectGame = () => {
        setGame(true);
    }

    const closeGame = () => {
        setGame(false);
    }

    return (
        <div className="text-center px-[10%] max-lg:pt-[.5rem] pt-[2rem] pb-[3rem]">
            <h3 className="font-bold text-[1.2rem]">Join the numbers and get to the 12288 tile!</h3>
            <li>Use your keyboard arrow keys to move tiles around the game board</li>
            {isConnected?<p className="btn my-4 bg-[#0045AD] inline-block text-white px-5 py-2 rounded-[4px] cursor-pointer" onClick={()=>{
                if(typeof userGameData!==undefined){
                  return  selectGame()
                }else{
                   return  
                }
                
                }}>{userGameData?"Start Game":"Authenticating......."}</p>:<p className="btn my-4  inline-block text-white px-5 py-2 rounded-[4px] cursor-pointer"><ConnectButton/></p>}
            
            { 
                game &&
                <BoardView closeGame={closeGame} />
            }
        </div>
    )
}

export default GameInfo