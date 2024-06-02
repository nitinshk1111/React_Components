import React, { useEffect, useState } from "react";
import checkWinner from "./CheckWinner";
import Tile from "./Tile";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [lastStep, setLastStep] = useState(null);
  const [className, setClassName] = useState({});
  const [messsage, setMessage] = useState("");

  useEffect(() => {
    if (checkWinner(board)) {
      setMessage(`Player ${lastStep} won!`);
    } else if (board.every((tile) => tile !== null)) {
      setMessage("It's a tie!");
    } else {
      setMessage(`Player ${lastStep === "X" ? "0" : "X"} turn now`);
    }
  }, [board]);

  const reset = () => {
    setBoard(Array(9).fill(null));
    setLastStep(null);
    setClassName({});
  };

  const handleTileClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = lastStep === "X" ? "0" : "X";

    className[index] = newBoard[index] === "0" ? "zero" : "cross";
    setClassName(className);
    setLastStep(newBoard[index]);
    setBoard(newBoard);
  };

  return (
    <>
      <div className={messsage.includes("won") ? "board disabled" : "board"}>
        {board.map((_, index) => (
          <Tile
            key={index}
            onTileClick={handleTileClick}
            tileIndex={index}
            className={className[index]}
          ></Tile>
        ))}
      </div>
      <button onClick={reset} className="reset">
        Reset
      </button>
      <div>{messsage}</div>
    </>
  );
};

export default Board;
