'use client'
import { useState } from "react"
import { useConnect,useAccount } from 'wagmi'
import BoardView from "./Board";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContext } from "react";
import { GameContext } from "@/hooks/GameContext";
import {toast} from "react-toastify"
import UseAuth from "@/hooks/UseAuth";
const GameInfo = () => {
    const [game, setGame] = useState(false);
    const gameStartTime=1699876818
    const {isConnected}=useAccount()
    UseAuth()
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
            <li>Use your mouse to click on tiles to merge them. You can also use your
                keyboard <strong>arrow keys</strong> to move the tiles around the game board
            </li>
            <li>You can tap on tiles to merge them. You can also swipe tiles to move them around the game board</li>
            {isConnected?<button className="btn my-4 bg-[#0045AD] inline-block text-white px-5 py-2 rounded-[4px] cursor-pointer" disabled={!userGameData?true:false} onClick={()=>{
                const currentEpochTime = Math.floor(new Date().getTime() / 1000);
                // if(currentEpochTime>gameStartTime){
                    if(typeof userGameData!==undefined){
                        return  selectGame()
                      }else{
                         return  
                      }

                // }else{
                //     toast.info("Game Has not Started, Game  Starts by 12pm UTC")
                // }
                
                
                }}>{userGameData?"Start Game":"Authenticating......."}</button>:<p className="btn my-4  inline-block text-white px-5 py-2 rounded-[4px] cursor-pointer"><ConnectButton/></p>}
            
            { 
                game &&
                <BoardView closeGame={closeGame} />
            }
        </div>
    )
}

export default GameInfo