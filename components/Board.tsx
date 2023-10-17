"use client";
import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "@/helper";
import useEvent from "@/hooks/useEvent";
import GameOverlay from "./GameOverlay";
import NoMoves from "./NoMoves";
import { useContext } from "react";
import { GameContext } from "@/hooks/GameContext";
import { UserGameData } from "@/types/GameTypes";

const BoardView = ({ closeGame }: any) => {
	const {
		userGameData,
		setUserGameData,
		updateUserGameData,
		fetchUserGameData,
		isMoveable,
		setIsMoveable,
		moveCounter,
		setMoveCounter,
	} = useContext(GameContext);
	const [board, setBoard] = useState(new Board());
	//parseInt(userGameData.moveUsed)

	const handleKeyDown = (event: { keyCode: number }) => {
		if (board.hasWon()) {
			return;
		}

		if (event.keyCode >= 37 && event.keyCode <= 40) {
			let direction = event.keyCode - 37;
			let boardClone = Object.assign(
				Object.create(Object.getPrototypeOf(board)),
				board
			);
			let newBoard = boardClone.move(direction);
			if (
				parseInt(userGameData.moveBought) < 1 &&
				parseInt(userGameData.moveUsed) > 30
			) {
				setIsMoveable(true);
			} else {
				setMoveCounter((e: any) => e + 1);
				console.log(moveCounter);
				console.log(userGameData);
				setBoard(newBoard);
			}
		}
	};

	const onScreenArrowClick = (direction: number) => {
        if(board.hasWon()) {
            return
        }

        else {
            let boardClone = Object.assign(
				Object.create(Object.getPrototypeOf(board)),
				board
			);
			let newBoard = boardClone.move(direction);
			if (
				parseInt(userGameData.moveBought) < 1 &&
				parseInt(userGameData.moveUsed) > 30
			) {
				setIsMoveable(true);
			} else {
				setMoveCounter((e: any) => e + 1);
				console.log(moveCounter);
				console.log(userGameData);
				setBoard(newBoard);
			}
        }
    }

	const calls = async () => {
		await updateUserGameData(userGameData.walletAddress, {
			moveUsed: moveCounter.toString(),
			Score: board.score.toString(),
		});
		const data = await fetchUserGameData(userGameData.walletAddress);
		setUserGameData(data);
	};
	const fetchUserDataCalls = async () => {
		console.log("users data dshouls be updating here ");
		const data = await fetchUserGameData(userGameData.walletAddress);
		setUserGameData(data);
	};
	useEffect(() => {
		if (moveCounter >= 31) {
			setIsMoveable(true);
		}
		calls();
	}, [moveCounter]);

	useEffect(() => {
		fetchUserDataCalls();
	}, []);

	useEvent(isMoveable, "keydown", handleKeyDown);

	const cells = board.cells.map((row, rowIndex) => {
		return (
			<div key={rowIndex}>
				{row.map((col, colIndex) => {
					return <Cell key={rowIndex + board.size + colIndex} />;
				})}
			</div>
		);
	});

	const tiles = board.tiles
		.filter((tile) => tile.value != 0)
		.map((tile, index) => {
			return <Tile tile={tile} key={index} />;
		});

	const onRestart = () => {
		setBoard(new Board());
	};

	const CloseGameInner = () => {
		// reset game boad
		onRestart();

		// close game Overlay
		closeGame();
	};

	return (
		<div>
			<div className="board-container">
				<div>
					<div className="flex justify-between py-4 mt-4 ">
						<div
							className="text-[white] cursor-pointer bg-[#0045AD] px-2 py-1 rounded-[4px]"
							onClick={onRestart}
						>
							Reset Game
						</div>
						<div className="text-[white]">Score: {board.score}</div>
					</div>
					<div className="board">
						{cells}
						{tiles}

						<GameOverlay onRestart={onRestart} board={board} />
						{/* {()=>{if(isMoveable===true)  alert("You have no Moves Any Longer")}} */}

						{/* {JSON.stringify(board.hasLost())} */}

						{isMoveable && <NoMoves />}
					</div>
					<div className="mobile">
                        <div className="flex gap-3 justify-end items-end mt-4 p-0">
                            <div className="flex">
                                <i className="bx bx-chevron-left text-white text-[2.2rem] border hover:bg-white hover:text-black rounded-[4px]" onClick={() => onScreenArrowClick(0)}></i>
                            </div>

                            <div className="flex flex-col gap-3">
                                <i className="bx bx-chevron-up text-white text-[2.2rem] border hover:bg-white hover:text-black rounded-[4px]" onClick={() => onScreenArrowClick(1)}></i>
                                <i className="bx bx-chevron-down text-white text-[2.2rem] border hover:bg-white hover:text-black rounded-[4px]" onClick={() => onScreenArrowClick(3)}></i>
                            </div>

                            <div className="flex">
                                <i className="bx bx-chevron-right text-white text-[2.2rem] border hover:bg-white hover:text-black rounded-[4px]" onClick={() => onScreenArrowClick(2)}></i>
                            </div>
                        </div>
                    </div>
				</div>

				<div
					className="cursor-pointer bg-white absolute top-[12%] right-[8%] text-[#0045AD] px-2 py-1 rounded-[4px]"
					onClick={CloseGameInner}
				>
					<p>Close Game</p>
				</div>
			</div>
		</div>
	);
};

export default BoardView;

// const gameBoard = () => {
//     const [board, setBoard] = useState([]);
//     const [score, setScore] = useState(0);
//     const [gameOver, setGameOver] = useState(false);

//     // function to handle arrow key presses

//     const handleKeyPress = (event) => {
//         // check if the key pressed is an arrow key
//         if (event.key.startsWith('Arrow')) {
//             const direction = event.key.replace('Arrow', '').toLowerCase();
//             moveTiles(direction);
//             console.log(direction);
//         }
//     }

//     useEffect(() => {

//         // initializeGame();
//         // // Add event listeners for arrow key presses
//         // window.addEventListener('keydown', handleKeyPress);

//         // // cleanup function to remove eventListeners when the component unmounts
//         // return () => {
//         //     window.removeEventListener('keydown', handleKeyPress);
//         // }

//         console.log("click");

//     }, [board]);

//     const initializeGame = () => {
//         // create a new 4 by 4 empty game board
//         const newBoard = Array.from({ length: 4 }, () => Array(4).fill(0));

//         // place two random tiles on the board
//         placeRandomTile(newBoard);
//         placeRandomTile(newBoard);

//         // set the initialized board to the state
//         setBoard(newBoard);

//         // set the initial score
//         setScore(20);

//         // set initial state of game over
//         setGameOver(false);

//         // Add event listeners for arrow key presses
//         window.addEventListener('keydown', handleKeyPress);

//         console.log(board);
//     }

//     // function to place a random tile on the board

//     const placeRandomTile = (board) => {
//         // find all empty cells on the board
//         const emptyCells = [];
//         board.forEach((row, rowIndex) => {
//             row.forEach((value, colIndex) => {
//                 if (value === 0) {
//                     emptyCells.push({row: rowIndex, col: colIndex});
//                 }
//             });
//         });

//         // If there are empty tiles, find a random cell and place a tile with value 2 or 4

//         if (emptyCells.length > 0) {
//             const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//             const newValue = Math.random() < 0.9 ? 2 : 4;
//             board[randomCell.row][randomCell.col] = newValue;
//         }
//     };

//     // function to move tile in a specific direction

//     const moveTiles = (direction) => {

//         // do not allow moves to continue if game is over
//         if(gameOver) {
//             return
//         }

//         // create a deep copy of the board
//         const newBoard = JSON.parse(JSON.stringify(board));
//         console.log(board);

//         // switch (direction) {
//         //     case 'up':
//         //         if(canMoveUp(newBoard)) {
//         //             const movedCells = moveTilesUp(newBoard);
//         //             animateTiles(movedCells)
//         //         }
//         //         break;

//         //     case 'down':
//         //         if(canMoveDown(newBoard)) {
//         //             const movedCells = moveTilesDown(newBoard);
//         //             animateTiles(movedCells)
//         //         }
//         //         break;
//         //     case 'left':
//         //         if(canMoveLeft(newBoard)) {
//         //             const movedCells = moveTilesLeft(newBoard);
//         //             animateTiles(movedCells)
//         //         }
//         //         break;

//         //     case 'right':
//         //         if(canMoveRight(newBoard)) {
//         //             const movedCells = moveTilesRight(newBoard);
//         //             animateTiles(movedCells)
//         //         }
//         //         break;

//         //     default:
//         //     // invalid direction
//         //     return;
//         // };

//         // check if the board changed after the move
//         if (JSON.stringify(newBoard) != JSON.stringify(board)) {
//             placeRandomTile(newBoard);
//             setBoard(newBoard);
//             updateUI(newBoard);

//             if(isGameOver(newBoard)) {
//                 setGameOver(true);
//             }
//         }
//     }

//     // function to render board

//     const renderBoard = () => {
//         return board.map((row, rowIndex) => (
//             <div key={rowIndex} className="board-row">
//                 {row.map((value, colIndex) => (
//                     <Tile key={colIndex} value={value} />
//                 ))}
//             </div>
//         ));
//     };

//     const canMoveUp = (board) => {
//         for (let col = 0; col < 4; col++) {
//           for (let row = 1; row < 4; row++) {
//             if (board[row][col] !== 0) {
//               // Check if there is an empty cell above or if the value above is the same
//               if (board[row - 1][col] === 0 || board[row - 1][col] === board[row][col]) {
//                 return true;
//               }
//             }
//           }
//         }
//         return false;
//     };

//     const canMoveDown = (board) => {
//         for (let col = 0; col < 4; col++) {
//           for (let row = 2; row >= 0; row--) {
//             if (board[row][col] !== 0) {
//               // Check if there is an empty cell below or if the value below is the same
//               if (board[row + 1][col] === 0 || board[row + 1][col] === board[row][col]) {
//                 return true;
//               }
//             }
//           }
//         }
//         return false;
//     };

//     // function to handle moving tiles

//     const canMoveLeft = (board) => {
//         for (let row = 0; row < 4; row++) {
//           for (let col = 1; col < 4; col++) {
//             if (board[row][col] !== 0) {
//               // Check if there is an empty cell to the left or if the value to the left is the same
//               if (board[row][col - 1] === 0 || board[row][col - 1] === board[row][col]) {
//                 return true;
//               }
//             }
//           }
//         }
//         return false;
//     };

//     const canMoveRight = (board) => {
//         for (let row = 0; row < 4; row++) {
//           for (let col = 2; col >= 0; col--) {
//             if (board[row][col] !== 0) {
//               // Check if there is an empty cell to the right or if the value to the right is the same
//               if (board[row][col + 1] === 0 || board[row][col + 1] === board[row][col]) {
//                 return true;
//               }
//             }
//           }
//         }
//         return false;
//     };

//     const animateTiles = (movedCells) => {
//         const tiles = document.querySelectorAll('.tile');

//         movedCells.forEach(({row, col, value, direction}) => {
//             const tile = Array.from(tiles).find(
//                 (el) =>
//                 el.getAttribute('data-row') === row.toString() &&
//                 el.getAttribute('data-col') === col.toString()
//             );

//             if (tile) {
//                 tile.classList.add(`moving-${direction}`);
//                 tile.addEventListener('transitionend', () => {
//                     tile.classList.remove(`moving-${direction}`);
//                 });
//             }
//         });
//     };

//     const moveTilesUp = (board) => {
//         // implement logic to move tiles up
//         for (let col = 0; col < 4; col++) {
//             for (let row = 1; row < 4; row++) {
//                 if (board[row][col] !== 0) {
//                     let newRow = row;
//                     while (newRow > 0 && board[newRow - 1][col] === 0) {
//                         // slide tile up
//                         board[newRow - 1][col] = board[newRow][col];
//                         board[newRow][col] = 0;
//                         newRow--;
//                     }

//                     if(newRow > 0 && board[newRow - 1][col] === board[newRow][col]) {
//                         // merge the tiles
//                         board[newRow - 1][col] *= 2;
//                         board[newRow][col] = 0;
//                     }
//                 }
//             }
//         }
//     }

//     const moveTilesDown = (board) => {
//         // implement logic to move tiles down

//         for (let col = 0; col < 4; col++) {
//             for (let row = 2; row >= 0; row--) {
//                 if (board[row][col] !== 0) {
//                     let newRow = row;
//                     while (newRow < 3 && board[newRow + 1][col] === 0) {
//                         // slide tile down
//                         board[newRow + 1][col] = board[newRow][col];
//                         board[newRow][col] = 0;
//                         newRow++;
//                     }

//                     if(newRow < 3 && board[newRow + 1][col] === board[newRow][col]) {
//                         // merge the tiles
//                         board[newRow + 1][col] *= 2;
//                         board[newRow][col] = 0;
//                     }
//                 }
//             }
//         }
//     }

//     const moveTilesLeft = (board) => {
//         // implement logic to move tiles left

//         for (let row = 0; row < 4; row++) {
//             for (let col = 1; col < 4; col++) {
//                 if (board[row][col] !== 0) {
//                     let newCol = col;
//                     while (newCol > 0 && board[row][newCol - 1] === 0) {
//                         // slide tile left
//                         board[row][newCol - 1] = board[row][newCol];
//                         board[row][newCol] = 0;
//                         newCol--;
//                     }

//                     if(newCol > 0 && board[row][newCol - 1] === board[row][newCol]) {
//                         // merge the tiles
//                         board[row][newCol - 1] *= 2;
//                         board[row][newCol] = 0;
//                     }
//                 }
//             }
//         }
//     }

//     const moveTilesRight = (board) => {
//         // implement logic to move tiles right

//         for (let row = 0; row < 4; row++) {
//             for (let col = 2; col >= 0; col--) {
//                 if (board[row][col] !== 0) {
//                     let newCol = col;
//                     while (newCol < 3 && board[row][newCol + 1] === 0) {
//                         // slide tile right
//                         board[row][newCol + 1] = board[row][newCol];
//                         board[row][newCol] = 0;
//                         newCol++;
//                     }

//                     if(newCol < 3 && board[row][newCol + 1] === board[row][newCol]) {
//                         // merge the tiles
//                         board[row][newCol + 1] *= 2;
//                         board[row][newCol] = 0;
//                     }
//                 }
//             }
//         }
//     }

//     const updateUI = (board) => {
//         const newScore = calculateScore(board);
//         setScore(newScore);
//     }

//     const calculateScore = (board) => {
//         return board.flat().reduce((acc, value) => acc + value, 0);
//     };

//     const isGameOver = (board) => {
//         return !canMoveUp(board) && !canMoveDown(board) && !canMoveLeft(board) && !canMoveRight(board)
//     }

//     // implement tile movement logic based on direction

//     // Handle Merging, sliding, e.t.c

//     // Update the board state with the new positions of the tile

//     // Call the placeRandomTile to add a new random tile after each move

//     // render the game board

//     return(
//         <div className="game-container py-96 bg-orange-500">
//             <p onClick={initializeGame}>Start</p>

//             <div className="score">Score: {score}</div>
//             {gameOver && <div className="game-over">Game Over</div>}
//             <div className="game-board">{renderBoard()}</div>
//         </div>
//     )
// }

// export default gameBoard
