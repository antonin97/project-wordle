import React from "react";
import { range } from "../../utils";

function Guess({ currentGuess }) {
    console.log("HI", currentGuess);
    return (
        <p className="guess">
            {range(5).map((j) => {
                return (
                    <span className="cell" key={j}>
                        {currentGuess?.guess[j]}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
