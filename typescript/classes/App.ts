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
      let playAgain = prompt('Vill du/ni spela igen? (ja/nej)? ');
      if (playAgain !== 'ja') { break; }
    }
  }

  createPlayers(): void {
    //console.clear();
    console.log('Connect-Four\n');

    let opponentType = prompt('två spelare eller mot dator (two/dator)? ');
    this.playerX = new Player(prompt('Spelare X:s namn: '), 'X', this.board);
    if (opponentType === 'dator') {
      this.playerO = new Player('Datorspelare,', 'O', this.board, true) //X istället för O hade jag...console.log(`Player Color: ${player.color}, Column: ${column}`); såg man problemet
    } else {
      this.playerO = new Player(prompt('Spelare O:s namn: '), 'O', this.board);
    }
  }

  startGameLoop(): void {
      if (!this.board.gameOver) {
        //console.clear();
        console.log('game-loop');
        this.board.render();
        let player = this.board.currentPlayerColor === 'X'
          ? this.playerX : this.playerO;
        if (player.isComputer) {
          console.log('ComputerMove?');
          
          let validMove = false;
          let column: number = -1;
          while (!validMove) {
            column = Math.floor(Math.random() * 6);
            if (this.board.matrix[0][column] === ' ') {
              validMove = true;
              console.log(`Player Color: ${player.color}, Column: ${column}`);
            }
          }
          this.board.makeMove(player.color, column,);
          console.log(`Datorspelaren gör sitt drag i kolumn: ${column + 1}`);
          this.startGameLoop();
        }  

        
        else {
          console.log('spelardrag')
          let move = prompt(`Ange ditt drag ${player.color} ${player.name} - skriv in rad:`
          );
          let [column] = move.split(',').map((x: string) => +x.trim() - 1);
          this.board.makeMove(player.color, column,);
          this.startGameLoop();
        }
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
