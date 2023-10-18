'use client'
import { useState } from "react"
import GameRulesEndless from "./GameRulesEndless"
import Leaderboard from "./Leaderboard"
import GameInfo from "./GameInfo"

const SubHeaderEndless = () => {
    const [selected, setSelected] = useState('rules');

    const selectRules = () => {
        setSelected('rules');
    }

    const selectLeaderBoard = () => {
        setSelected('leaderboard');
    }

    const selectGameInfo = () => {
        setSelected('gameinfo');
    }

    return (
        <>
            <div className="px-[10%] pt-[2em] pb-[1em] flex justify-between">
                <p className={`hover:text-[#0045AD] pb-1 border-b-2 font-bold  hover:border-[#0045AD] border-[transparent] cursor-pointer max-lg:text-[.8rem] max-lg:w-[30%] text-center ${selected == 'rules' ? 'text-[#0045AD] border-b-[#0045AD]' : ''}`} onClick={selectRules}>Game Rules</p>
                <p className={`hover:text-[#0045AD] pb-1 border-b-2 font-bold  hover:border-[#0045AD] border-[transparent] cursor-pointer max-lg:text-[.8rem] max-lg:w-[30%] text-center ${selected == 'gameinfo' ? 'text-[#0045AD] border-b-[#0045AD]' : ''}`} onClick={selectGameInfo}>Play Game</p>
                <p className={`hover:text-[#0045AD] pb-1 border-b-2 font-bold  hover:border-[#0045AD] border-[transparent] cursor-pointer max-lg:text-[.8rem] max-lg:w-[30%] text-center ${selected == 'leaderboard' ? 'text-[#0045AD] border-b-[#0045AD]' : ''}`} onClick={selectLeaderBoard}>Leaderboard</p>
                
            </div>

            {/* Game Rules */}

            {
                selected == 'rules' &&
                <GameRulesEndless />
            }

            {/* Leaderboard */}

            {
                selected == 'leaderboard' &&
                <Leaderboard title={"Endless Game Mode Leaderboard"}/>
            }

            {/* Game */}

            {
                selected == 'gameinfo' &&
                <GameInfo />
            }
        </>
    )
}

export default SubHeaderEndless