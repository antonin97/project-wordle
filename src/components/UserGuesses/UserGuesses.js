import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function UserGuesses({ guesses, answer }) {

    return (
        <div className="guess-results">
            <div className="guess-results">
                {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
                    return (
                        <Guess
                            key={i}
                            answer={answer}
                            currentGuess={guesses[i] ? guesses[i].guess : null}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default UserGuesses;
