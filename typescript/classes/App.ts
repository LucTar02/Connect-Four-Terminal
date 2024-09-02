import prompt from "../helpers/prompt.js";
import Board from "./Board.js";
import Player from "./Player.js";

export default class App{

  board: Board;
  playerX: Player;
  playerO: Player;

  constructor() {
    // a while-loop that let us play the game repeatedly
    while (true) {
      this.createPlayers();
      console.log('fem');
      this.board = new Board();
      this.startGameLoop();
      //this.whoHasWonOnGameOver();
      console.log('');
      let playAgain = prompt('Vill ni spela igen? (ja/nej)? ');
      if (playAgain !== 'ja') { break; }
    }
  }

  createPlayers(): void {
    console.clear();
    console.log('Connect-Four\n');
    this.playerX = new Player(prompt('Spelare X:s namn: '), 'X', this.board);
    this.playerO = new Player(prompt('Spelare O:s namn: '), 'O', this.board);
  }

  startGameLoop(): void {
    while (!this.board.gameOver)
      console.clear();
    this.board.render();
  }

}
