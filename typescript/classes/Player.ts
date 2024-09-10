import Board from "./Board.js";

export default class Player {

  name: string;
  color: string;
  board: Board;
  isComputer: boolean;

  //constructor(name: string, color: string, board: Board, isComputer: boolean = false)

  constructor(name: string, color: string, board: Board, isComputer: boolean = false) {
    this.name = name;
    this.color = color;
    this.board = board;
    this.isComputer = isComputer;
  }

  // makeComputerMove(): number {
  //   // 
  //   if (!this.board) {
  //   console.log("Board not vaild!"); // Detta visas
  //   return -1;
  //   }
  //   let validMoves = this.board.matrix[0].map((_col, index) => index).filter(col => this.board.matrix[0][col] === ' ');
  //   let randomIndex = Math.floor(Math.random() * validMoves.length);
  //   return validMoves[randomIndex];
  // }
  
  // makeComputerMove(): number {
  
  // }
}