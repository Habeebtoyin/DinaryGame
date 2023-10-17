// Board start

// 'use client'
// import { useRef, useEffect, useState } from 'react'
// import Grid from "./Grid"
// import Tile from './Tile'

// const BoardView = () => {

//     const gameboardRef = useRef(null);

//     useEffect(() => {
//         const gameboardElement = gameboardRef.current;
//         if(gameboardElement) {
//             const grid = new Grid(gameboardElement);
//             console.log(grid.randomEmptyCell());
//             const a = grid.randomEmptyCell._tile = new Tile (gameboardElement)
//             const b = grid.randomEmptyCell._tile = new Tile (gameboardElement)
//             // console.log(a);
//             // console.log(b);
//         }

//         else {
//             console.log("No");
//         }

//     }, []);

//     return (
//         <div className="flex justify-center items-center m-0 text-[7.5vmin] px-[30%] my-[8em]">
//             <div id="game-board" ref={gameboardRef}></div>
//         </div>
//     )
// }

// export default BoardView

// Board end

// Tile Start

// export default class Tile {
//     constructor(tileContainer, value = Math.random() > .5 ? 2 : 4) {
//         this.tileElement = document.createElement("div");
//         this.tileElement.classList.add("tile");
//         tileContainer.append(this.tileElement);
//         this.value = value;
//     }

//     set value(v) {
//         this._value = v;
//         this.tileElement.textContent = v
//         const power = Math.log2(v)
//         const backgroundLightness = 100 - power * 9
//         this.tileElement.style.setProperty(
//             "--background-lightness",
//             `${backgroundLightness}%`
//         )
//         this.tileElement.style.setProperty(
//             "--text-lightness",
//             `${backgroundLightness <= 50 ? 90 : 10}%`
//         )
//     }

//     set x(value) {
//         this.tileX = value
//         this.tileElement.style.setProperty("--x", value);
//     }   

//     set y(value) {
//         this.tileY = value
//         this.tileElement.style.setProperty("--y", value);
//     }
// }

// Tile end

// Grid start

// 'use client'
// import { useEffect } from "react";

// const Grid = () => {
//     const GRID_SIZE = 4;
//     const CELL_SIZE = 20;
//     const CELL_GAP = 2;

//     useEffect(() => {
        
//         const gridElement = document.getElementById('game-board');

//         if (gridElement) {
//             gridElement.style.setProperty('--grid-size', GRID_SIZE);
//             gridElement.style.setProperty('--cell-size', `${CELL_SIZE}vmin`);
//             gridElement.style.setProperty('--cell-gap', `${CELL_GAP}vmin`);
//         }

//         else {
//             console.error("Element not found");
//         }
        
//         const useEffectCells = createCellElement(gridElement).map((cellElement, index) => {
//             return new Cell (
//                 cellElement,
//                 index % GRID_SIZE,
//                 Math.floor(index / GRID_SIZE),
//             )
//         });
//     }, []);

//     class Cell {
//         constructor(cellElement, x, y) {
//             this.cellElement = cellElement;
//             this.x = x;
//             this.y = y;
//         }
//     }

//     const createCellElement = () => {
//         const gridElement = document.getElementById('game-board');
//         const cells = [];
//         for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
//             const cell = document.createElement("div");
//             cell.classList.add("cell");
//             cells.push(cell);
//             gridElement.append(cell);
//         }
//         return cells
//     }


// }

// export default Grid
// import React, {Component} from "react";
// import BoardView from "./Board";

// const GRID_SIZE = 4;
// const CELL_SIZE = 20;
// const CELL_GAP = 2;

// export default class Grid  {
    
//     constructor(gridElement) {
//         gridElement.style.setProperty('--grid-size', GRID_SIZE);
//         gridElement.style.setProperty('--cell-size', `${CELL_SIZE}vmin`);
//         gridElement.style.setProperty('--cell-gap', `${CELL_GAP}vmin`);   
//         this.cells = createCellElements(gridElement).map((cellElement, index) => {
//             return new Cell(cellElement, index % GRID_SIZE, Math.floor(index / GRID_SIZE))
//         });
//     }

//     get emptyCells() {
//         return this.cells.filter(cell => cell._tile == null);
//     }

//     randomEmptyCell() {
//         const randomIndex = Math.floor(Math.random() * this.emptyCells.length)
//         return this.emptyCells[randomIndex];
//     }
// }

// class Cell {
//     constructor(cellElement, x, y) {
//         this.cellElement = cellElement;
//         this.x = x;
//         this.y = y;
//         this._tile;
//     }

//     get tile() {
//         return this._tile
//     }

//     set tile(tileValue) {
//         this._tile = tileValue 
//         if (tileValue == null) {
//             return
//         }
//         this._tile.hor = this.x
//         this._tile.ver = this.y
//     }
// }

// const createCellElements = (gridElement) => {
//     const cells = [];
//     for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
//         const cell = document.createElement("div");
//         cell.classList.add("cell");
//         cells.push(cell);
//         gridElement.append(cell);
//     }
//     return cells
// }

// Grid end


// css 

/* game board */

/* .tile {
const GRID_SIZE = 4;
//     const CELL_SIZE = 20;
//     const CELL_GAP = 2;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--cell-size);
  height: var(--cell-size);
  border-radius: 1vmin;
  top: calc(var(--y) * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap));
  left: calc(var(--x) * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap));

  background-color: hsl(200, 50%, var(--background-lightness));
  color: hsl(200, 25%, var(--text-lightness));

  animation: show 200ms ease-in-out;
  transition: 100ms ease-in-out;
} */