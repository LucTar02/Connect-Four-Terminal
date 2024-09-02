import prompt from "../helpers/prompt.js";
import Board from "./Board.js";
import Player from "./Player.js";

export default class App {

  board: Board;
  playerX: Player;
  playerO: Player;

  constructor() {
    // a while-loop that let us play the game repeatedly
    while (true) {
      this.createPlayers();
      console.log('player Created');
      this.board = new Board();
      this.startGameLoop();
      this.whoHasWonOnGameOver();
      console.log('');
      let playAgain = prompt('Vill ni spela igen? (ja/nej)? ');
      if (playAgain !== 'ja') { break; }
    }
  }

  createPlayers(): void {
    //console.clear();
    console.log('Connect-Four\n');
    this.playerX = new Player(prompt('Spelare X:s namn: '), 'X', this.board);
    this.playerO = new Player(prompt('Spelare O:s namn: '), 'O', this.board);
  }

    startGameLoop(): void {
    while (!this.board.gameOver){
      //console.clear();
      console.log('game-loop');
    this.board.render();
    let player = this.board.currentPlayerColor === 'X'
      ? this.playerX : this.playerO;
      let move = prompt(
        `Ange ditt drag ${player.color} ${player.name} - skriv in rad:`
    );
    let [column] = move.split(',').map((x: string) => +x.trim() - 1);
    this.board.makeMove(player.color, column,);
      }
    }


  whoHasWonOnGameOver(): void {
    // the game is over, tell the player who has one or if we have a draw
    //console.clear();
    console.log('who-won');
    this.board.render();
    if (this.board.winner) {
      let winningPlayer = (this.board.winner === 'X' ? this.playerX : this.playerO);
      console.log(`Grattis ${winningPlayer.color}: ${winningPlayer.name} du vann!`);
    }
    else {
      console.log('Tyvärr det blev oavgjort...');
    }
  }

}
