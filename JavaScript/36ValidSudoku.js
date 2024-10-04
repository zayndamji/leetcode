/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const n = new Map();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == '.') continue;
      if (n.get(board[i][j]) != undefined) return false;
      n.set(board[i][j], 1);
    }
    n.clear();
  }

  for (let j = 0; j < board[0].length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] == '.') continue;
      if (n.get(board[i][j]) != undefined) return false;
      n.set(board[i][j], 1);
    }
    n.clear();
  }

  for (let i = 0; i < board[0].length; i+=3) {
    for (let j = 0; j < board.length; j+=3) {
      for (let k = i; k < i+3; k++) {
        for (let l = j; l < j+3; l++) {
          if (board[k][l] == '.') continue;
          if (n.get(board[k][l]) != undefined) return false;
          n.set(board[k][l], 1);
        }
      }
      n.clear();
    }
  }

  return true;
};