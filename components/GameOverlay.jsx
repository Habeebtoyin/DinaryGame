import { GlobalProvider } from "@/app/GlobalProvider"
import { GameContext } from "@/hooks/GameContext"
import useUpdateUserOnGameOver from "@/hooks/useUpdateUserOnGameOver"
import { useContext ,useEffect, useState} from "react"

const GameOverlay = ({onRestart, board}) => {
        const {moveCounter,
				setMoveCounter,}=useContext(GameContext)
    const [counter,setCounter]=useState(0)
    const {calls}=useUpdateUserOnGameOver()

    useEffect(() => {
        if(board.hasLost()){
calls()
        }
      
    
      
    }, [moveCounter])
    
    if(board.hasWon()) {
        return (
            <div className="tile2048"></div>
        )
    }
    

    else if(board.hasLost()) {
      //  calls()
  
        return (
            <div className="gameOver">
                <div className="gameOver">
                    <img src="/assets/images/try-again.gif" 
                        style={{ 
                            width: "100%",
                            height: "100%",
                            cursor: "pointer"
                        }}
                        onClick={()=>{
                          //  calls()
                            onRestart()
                        }}
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