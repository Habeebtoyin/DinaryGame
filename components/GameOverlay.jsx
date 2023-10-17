const GameOverlay = ({onRestart, board}) => {
    if(board.hasWon()) {
        return (
            <div className="tile2048"></div>
        )
    }

    else if(board.hasLost()) {
        return (
            <div className="gameOver">
                <div className="gameOver">
                    <img src="/assets/images/try-again.gif" 
                        style={{ 
                            width: "100%",
                            height: "100%",
                            cursor: "pointer"
                        }}
                        onClick={onRestart}
                    >
                    
                    </img>
                </div>
            </div>
        )
    }
    return (
        null
    )
}

export default GameOverlay