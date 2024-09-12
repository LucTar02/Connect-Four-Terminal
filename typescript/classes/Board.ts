export default class Board {

  matrix: Array<Array<string>>;
  currentPlayerColor: string;
  gameOver: boolean;
  isADraw: boolean;
  winner: string | boolean;

  constructor() {
    
    this.matrix = [...new Array(6)].map(_row =>
      [...new Array(7)].map(_column => ' ')
    );
    // currentPlayer, start with X?
    this.currentPlayerColor = 'X';    
    this.winner = false;
    this.isADraw = false;
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
  
  makeMove(color: string,  column: number): boolean{
    // don't make any move if the game is over
    if (this.gameOver) { return false; }
    // check that the color is X or O - otherwise don't make the move
    if (color !== 'X' && color !== 'O') { return false; }
    // check that the color matches the player's turn - otherwise don't make the move
    if (color !== this.currentPlayerColor) { return false; }
    // check that the column are numbers - otherwise don't make the move
    if (isNaN(column)) { return false; }
    // check that the column is between 0 and matrix[0] - otherwise don't make the move
    if (column < 0 || column >= this.matrix[0].length) { return false; }
    // check that the position is empty - otherwise don't make the move
        let row = -1;
    for (let r = this.matrix.length - 1; r >= 0; r--) {
        if (this.matrix[r][column] === ' ') {
            row = r;
            break;
        }
    }
    // If no empty row is found, the column is full
    if (row === -1) { return false; }
    
    // make the move
    this.matrix[row][column] = color;
    // change the current player color
    this.currentPlayerColor = this.currentPlayerColor === 'X' ? 'O' : 'X';
    // check if someone has won or if it's a draw/tie and update properties
    this.winner = this.winCheck();
    this.isADraw = this.drawCheck();
    // the game is over if someone has won or if it's a draw
    this.gameOver = !!(this.winner || this.isADraw);
    // return true if the move could be made
    return true;
  }


  winCheck(): string | false {
    console.log('test')
    let m = this.matrix;
        for (let color of 'XO') {
          // r = row, c = column
          
              let offsets = [
      [[0, 0], [0, 1], [0, 2],[0, 3]],  // horizontal win
      [[0, 0], [1, 0], [2, 0],[3, 0]],  // vertical win [0, 3] till 3, 0 borde vara rätt såg efter commit...
      [[0, 0], [1, 1], [2, 2],[3, 3]],  // vänster upp till höger nere
      [[0, 0], [1, -1], [2, -2],[3, -3]] // höger upp till vänster nere
          ];
          
      for (let r = 0; r < m.length; r++) {
        for (let c = 0; c < m[0].length; c++) {
          // ro = row offset, co = column offset
          for (let winType of offsets) {
            let colorsInCombo = '';
            for (let [ro, co] of winType) {
              colorsInCombo += (m[r + ro] || [])[c + co];
            }
            if (colorsInCombo === color.repeat(4)) {
              return color;
            }
          }
        }
      }
    }
    return false;
  }

  drawCheck(): boolean {
    return !this.winCheck() && !this.matrix.flat().includes(' ');
  }

}