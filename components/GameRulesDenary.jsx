const GameRulesDenary = () => {
    return (
        <div className="px-[10%] max-lg:pt-[.5rem] pt-[2rem] pb-[3rem]">
            <p> Denary is the classic indices mode. Players compete to reach the highest possible sccores.
                The top 10 players on the leaderboard after 24hours of game activation will be rewarded with
                <strong> $ZBC</strong>
            </p>

            <p> To play Denary mode, simply tap on the <strong>Play Game</strong> button to start playing.
            </p>

            <h3 className="font-bold my-[.5rem]">Rules:</h3>

            <div>
                <li>The Denary Game is a 4 X 4 grid using 2 values</li>
                <li>Each tile has a value which is displayed on the tile
                </li>
                <li>Players can merge two tiles of the same value to create a new tile with the value of
                    the two tiles that are merged
                </li>
                <li>If a player merges two tiles that have a special power up, the power-up will be
                    activated automatically
                </li>
                <li>
                    The game ends when the player fills the entire gameboard with tiles or when the player runs out of moves
                </li>
            </div>

            <h3 className="font-bold my-[.5rem]">Objectives</h3>
            
            <div>
                <li>Reach the highest score possible</li>
                <li>Be one of the top 10 players on the leaderboard at the end of the day to earn rewards</li>
            </div>

        </div>
    )
}

export default GameRulesDenary