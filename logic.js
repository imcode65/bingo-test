module.exports = {
  markBoard: function (bingoBoard, markedBoard, number) {
    for (let row = 0; row < bingoBoard.length; row++) {
      for (let col = 0; col < bingoBoard[row].length; col++) {
        if (bingoBoard[row][col] === number) {
          markedBoard[row][col] = true;
        }
      }
    }
    return markedBoard;
  },
  isWinningBoard: function (markedBoard) {
    for (let i = 0; i < 5; i++) {
      const rowWin = markedBoard[i].every((cell) => cell);
      const colWin = markedBoard.map((row) => row[i]).every((cell) => cell);
      if (rowWin || colWin) {
        return true;
      }
    }
    return false;
  },
};
