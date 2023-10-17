'use client'
import { useState } from "react"
import BoardView from "./Board";

const GameInfoPVP = () => {
    const [game, setGame] = useState(false);

    const selectGame = () => {
        setGame(true);
    }

    const closeGame = () => {
        setGame(false);
    }

    return (
        <div className="text-center px-[10%] max-lg:pt-[.5rem] pt-[2rem] pb-[3rem]">
            <h3 className="font-bold text-[1.2rem]">Outscore your opponent by creating high value tiles in a limited time</h3>
            <li>Use your keyboard arrow keys to move tiles around the game board</li>
            <p className="btn my-4 bg-[#0045AD] inline-block text-white px-5 py-2 rounded-[4px] cursor-pointer" onClick={selectGame}>Start Game</p>
            { 
                game &&
                <BoardView closeGame={closeGame} />
            }
        </div>
    )
}

export default GameInfoPVP