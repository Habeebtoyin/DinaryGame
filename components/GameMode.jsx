'use client'
import React, { Component } from "react";
import GameModeCard from "./GameModeCard";
import GameModeDetails from "@/data/GameModeDetails"

class GameMode extends Component {
    
    constructor() {
        super();

        this.state = {
            data: GameModeDetails,
        }
    }

    render() {
        const {data} = this.state

        return (
            <div className="mt-[2em] text-center px-[10%] py-[1em] res-pad-in">
                <div className="">
                    <h1 className="res-font font-bold text-[2.5rem]">Game Modes</h1>
                    <p>Learn about the various game modes we have</p>
                </div>
                <div className="py-[1em] grid max-lg:grid-cols-1 grid-cols-3 gap-6 my-[1em]">
                    {
                        data.map(({id, ...otherProps}) => 
                            <GameModeCard key={id} {...otherProps} />   
                        )
                    }
                </div>
            </div>
        )

    }
}

export default GameMode