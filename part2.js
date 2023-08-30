const fs = require("fs");
const { markBoard, isWinningBoard } = require("./logic");

fs.readFile("data/calledNumbers.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the calledNumbers file:", err);
    return;
  }

  const calledNumbers = data.split(",").map(Number);

  fs.readFile("data/multipleBingoBoards.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the multipleBingoBoards file:", err);
      return;
    }

    const rawBoards = data.trim().split("\n\n");
    const bingoBoards = rawBoards.map((board) =>
      board.split("\n").map((row) => row.trim().split(/\s+/).map(Number))
    );

    bingoBoards.forEach((bingoBoard, boardIndex) => {
      const markedBoard = Array.from({ length: 5 }, () => Array(5).fill(false));

      let gotBingo = false;

      for (const number of calledNumbers) {
        markBoard(bingoBoard, markedBoard, number);
        if (isWinningBoard(markedBoard)) {
          console.log(`Board ${boardIndex + 1} will get Bingo!`);
          gotBingo = true;
          break;
        }
      }

      if (!gotBingo) {
        console.log(`Board ${boardIndex + 1} will not get Bingo.`);
      }
    });
  });
});
