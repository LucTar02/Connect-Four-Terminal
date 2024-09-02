export default class Board {

  matrix: Array<Array<string>>;
  currentPlayerColor: string;
  gameOver: boolean;

  constructor() {      
    // 
    this.matrix = [...new Array(6)].map(_row =>
      [...new Array(7)].map(_column => ' ')
    );
    // currentPlayer, start with X?
    this.currentPlayerColor = 'X';
    
    //this.winner = false;
    //this.isADraw = false;
    this.gameOver = false;
  }

    render() {
      // render connect-Four
      let line = '\n' + '-'.repeat(29) + '\n';
      console.log(
        line +
        this.matrix.map(row =>
          row.map(column => `| ${column} `).join('')
          + '|').join(line) +
        line
      );
    }

}