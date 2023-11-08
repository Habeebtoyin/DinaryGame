const GameRules = () => {
    return (
        <div className="px-[10%] max-lg:pt-[.5rem] pt-[2rem] pb-[3rem]">
            <p> PvP mode is available once a day on a limited time basis, but offers bigger rewards than
                Denary mode. Players compete against each other in real-time to see who can reach the 
                highest score
            </p>

            <p> To play PvP mode, simply tap on the <strong>Play Game</strong> button to start playing.
                You will be matched with another player of similar skill level
            </p>

            <h3 className="font-bold my-[.5rem]">Rules:</h3>

            <div>
                <li>The same rules as Denary mode apply, but players are competing against each other in real-time </li>
                <li>Players commit equal amount of $ZBC to the reward pool, and 95% of the total pooled $ZBC by the two players
                    is rewarded to the player with the highest scores while the remaining 5% $ZBC is charged as the platform
                    fee
                </li>
                <li>The player with the highest score at end of the match wins</li>
            </div>

            <h3 className="font-bold my-[.5rem]">Objectives</h3>
            
            <div>
                <li>Reach the highest score possible</li>
                <li>Win the match against your opponent</li>
            </div>

        </div>
    )
}

export default GameRules