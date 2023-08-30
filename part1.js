const fs = require("fs");
const { markBoard, isWinningBoard } = require("./logic");

fs.readFile("data/calledNumbers.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the calledNumbers file:", err);
    return;
  }

  const calledNumbers = data.split(",").map(Number);

  fs.readFile("data/bingoBoard.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the bingoBoard file:", err);
      return;
    }

    const bingoBoard = data
      .split("\n")
      .map((row) => row.trim().split(/\s+/).map(Number));

    const markedBoard = Array.from({ length: 5 }, () => Array(5).fill(false));

    for (const number of calledNumbers) {
      markBoard(bingoBoard, markedBoard, number);
      if (isWinningBoard(markedBoard)) {
        console.log("This card will get Bingo!");
        return;
      }
    }

    console.log("This card will not get Bingo.");
  });
});
