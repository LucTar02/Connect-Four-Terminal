import Board from "./Board.js";

export default class Player {

  name: string;
  color: string;
  board: Board;
  //isComputer: boolean;

  //constructor(name: string, color: string, board: Board, isComputer: boolean = false)

  constructor(name: string, color: string, board: Board,) {
    this.name = name;
    this.color = color;
    this.board = board;
    //this.isComputer = isComputer;
  }

  // makeComputerMove(): Array<number> {
  //   // look at the board and calculate a move based on 
  //   // the curent board status
  //   return [1, 1];
  // }

}