import React from "react";
import { range } from "../../utils";

import { checkGuess } from "../../game-helpers";

function Guess({ currentGuess, answer }) {
    const checkArray = checkGuess(currentGuess, answer);

    return (
        <p className="guess">
            {range(5).map((index) => {
                return (
                    <span
                        className={
                            checkArray
                                ? `cell ${checkArray[index].status}`
                                : "cell"
                        }
                        key={index}
                    >
                        {checkArray
                            ? `${checkArray[index].letter}`
                            : null}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
