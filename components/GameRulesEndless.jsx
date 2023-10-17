const GameRulesEndless = () => {
    return (
        <div className="px-[10%] max-lg:pt-[.5rem] pt-[2rem] pb-[3rem]">
            <p> In Endless, players try to reach the highest score without losing
            </p>

            <p> To play Endless mode, simply tap on the <strong>Play Game</strong> button to start playing.
            </p>

            <h3 className="font-bold my-[.5rem]">Rules:</h3>

            <div>
                <li>The same rules as Denary applies but game does not end when the player fills up the board with tiles</li>
                <li>The game ends when the player runs out of moves
                </li>
                <li>Rewards will be calculated as explained below
                </li>
                <li> X is greater than each player game scores during the a session
                </li>
                <li>
                    Y is greater than Total players game scores during the session 
                </li>
                <li>
                    Z is greater than total committed token by players 
                </li>
                <li>
                    Rp is greater than reward per player after the session
                </li>
                <li>
                    Rp = (X/Y)xZ
                </li>
                <li>
                    The highest scores of players will be used for the calculation
                </li>
                <li>
                    Every session lasts for 4 hours
                </li>
            </div>

            <h3 className="font-bold my-[.5rem]">Objectives</h3>
            
            <div>
                <li>Reach the highest score possible</li>
                <li>Beat your previous score</li>
            </div>

        </div>
    )
}

export default GameRulesEndless