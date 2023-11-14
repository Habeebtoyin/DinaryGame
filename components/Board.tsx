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
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import Link from "next/link";
import { redirect } from "next/navigation";
import useUpdateUserOnGameOver from "@/hooks/useUpdateUserOnGameOver";

const BoardView = ({ closeGame }: any) => {
	const gameOverUpdate = useUpdateUserOnGameOver();
	const { isConnected } = useAccount();
	const [isError, setIsError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
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
	const currentEpochTime = Math.floor(new Date().getTime() / 1000);
	//parseInt(userGameData.moveUsed)
	if (!userGameData) {
		redirect("/");
	}

	const handleKeyDown = (event: { keyCode: number }) => {
		if (isConnected == true) {
			setIsError(false);
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
				console.log("mover here");
				if (
					parseInt(userGameData.moveBought) < 1 &&
					parseInt(userGameData.moveUsed) > 30
				) {
					setIsMoveable(true);
				} else {
					setMoveCounter((e: any) => e + 1);

					setBoard(newBoard);
				}
			}
		} else {
			setErrorMsg("Wallet is Not Connect You can not Play");
			setIsError(true);
		}
	};

	const onScreenArrowClick = (direction: number) => {
		if (isConnected == true) {
			setIsError(false);
			if (board.hasWon()) {
				return;
			} else {
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

					setBoard(newBoard);
				}
			}
		} else {
			setErrorMsg("Wallet is Not Connect You can not Play");
			setIsError(true);
		}
	};

	const calls = async () => {
		await updateUserGameData(userGameData.walletAddress, {
			moveUsed: moveCounter.toString(),
			Score: (
				parseInt(userGameData.Score.toString()) +
				parseInt(board.score.toString())
			).toString(),
		});
		const data = await fetchUserGameData(userGameData.walletAddress);
		setUserGameData(data);
	};
	const fetchUserDataCalls = async () => {
		//console.log("users data dshouls be updating here ");
		const data = await fetchUserGameData(userGameData.walletAddress);
		setUserGameData(data);
		//console.log("to edit ", { data });
	};
	useEffect(() => {
		if (moveCounter >= 31 || userGameData.moveBought === "0") {
			setIsMoveable(true);
		}
	}, [moveCounter]);
	useEffect(() => {
		console.log("score change");
		calls();
	}, [board.score]);

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
		gameOverUpdate.calls();
		// reset game boad
		onRestart();

		// close game Overlay
		closeGame();
	};

	return (
		<div>
			<div className="board-container">
				<div>
					<div className="flex justify-center py-4 mt-4">
						<div className="text-white bg-[#fda44b] px-2 py-1 rounded-[4px] mr-3">
							SCORE <br /> {userGameData.Score.toString()}
						</div>
						<div className="text-[white] cursor-pointer bg-[#fda44b] px-2 py-1 rounded-[4px]">
							BEST <br /> {userGameData.bestScore}
						</div>
					</div>

					<div className="board">
						{cells}
						{tiles}

						<GameOverlay onRestart={onRestart} board={board} />
						{/* {()=>{if(isMoveable===true)  alert("You have no Moves Any Longer")}} */}

						{/* {JSON.stringify(board.hasLost())} */}

						{isMoveable && (
							<NoMoves
								score={userGameData.Score.toString()}
								trackingScore={() => {
									if (userGameData) {
										return userGameData.lifeTimeScore
											? userGameData.lifeTimeScore
											: 0;
									}
								}}
							/>
						)}
					</div>
					<div className="mobile">
						<div className="flex gap-3 justify-end items-end p-0 mt-4">
							<div className="flex">
								<i
									className="bx bx-chevron-left text-black text-[2.2rem] border border-black hover:bg-black hover:text-white rounded-[4px]"
									onClick={() => onScreenArrowClick(0)}
								></i>
							</div>

							<div className="flex flex-col gap-3">
								<i
									className="bx bx-chevron-up text-black text-[2.2rem] border border-black hover:bg-black hover:text-white rounded-[4px]"
									onClick={() => onScreenArrowClick(1)}
								></i>
								<i
									className="bx bx-chevron-down text-black text-[2.2rem] border border-black hover:bg-black hover:text-white rounded-[4px]"
									onClick={() => onScreenArrowClick(3)}
								></i>
							</div>

							<div className="flex">
								<i
									className="bx bx-chevron-right text-black text-[2.2rem] border border-black hover:bg-black hover:text-white rounded-[4px]"
									onClick={() => onScreenArrowClick(2)}
								></i>
							</div>
						</div>
					</div>
				</div>

				<div
					className="cursor-pointer text-white absolute top-[10%] right-[8%] bg-[#0045AD] px-2 py-1 rounded-[4px]"
					onClick={CloseGameInner}
				>
					<p>Close Game</p>
				</div>
				<Link
					href={"/dashboard"}
					className="cursor-pointer mt-3 text-white absolute top-[15%] right-[8%] bg-[#0045AD] px-2 py-1 rounded-[4px]"
				>
					<p>Score and Rewards</p>
				</Link>
			</div>
			{isError == true ? toast.error(errorMsg) : <></>}
		</div>
	);
};

export default BoardView;
