const { markBoard, isWinningBoard } = require("./logic");

test("should mark board correctly", () => {
  const bingoBoard = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  const markedBoard = [
    [true, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];

  expect(
    markBoard(
      bingoBoard,
      Array.from({ length: 5 }, () => Array(5).fill(false)),
      1
    )
  ).toEqual(markedBoard);
});

test("should identify a winning board", () => {
  const markedBoard = [
    [true, true, true, true, true],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];
  expect(isWinningBoard(markedBoard)).toBe(true);
});

test("should identify a non-winning board", () => {
  const markedBoard = [
    [true, false, true, true, true],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];
  expect(isWinningBoard(markedBoard)).toBe(false);
});
