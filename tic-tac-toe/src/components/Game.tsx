import { useState } from "react";
import Board from "./Board"
import styles from "./Game.module.css";

const Game = () => {
    type SquareValue = "X" | "O" | null;

    const initialSquares: SquareValue[] = Array(9).fill(null);


    const [history, setHistory] = useState<SquareValue[][]>([initialSquares]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    function handlePlay(nextSquares: SquareValue[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((_squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        }
        else {
            description = "Go to game start";
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
        )

    })

    return (<>
        <h1>Tic-Tac-Toe</h1>
        <div className={styles.game}>
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    </>
    )
}

export default Game
