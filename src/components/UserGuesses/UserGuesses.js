import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function UserGuesses({ guesses }) {
    console.log(guesses);

    return (
        <div className="guess-results">
            <div className="guess-results">
                {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
                    return (
                        <Guess
                            key={i}
                            currentGuess={guesses[i] ? guesses[i] : null}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default UserGuesses;
