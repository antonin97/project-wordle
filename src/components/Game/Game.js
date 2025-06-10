import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import TextInput from "../TextInput";
import UserGuesses from "../UserGuesses";
import WinBanner from "../WinBanner";
import LoseBanner from "../LoseBanner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
//
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [gameOutcome, setGameOutcome] = React.useState(0); // 0 = ongoing, 1 = win, -1 = lose

    function restart() {
        setGuesses([]);
        setGameOutcome(0);
        answer = sample(WORDS);
        console.info({ answer });
    }


    function handleGuesses(guess) {
        

        const newGuesses = [...guesses, { guess, id: crypto.randomUUID() }];

        setGuesses(newGuesses);

        if (guess === answer) {
            setGameOutcome(1); // Win
            return;
        }

        if (NUM_OF_GUESSES_ALLOWED <= newGuesses.length) {
            setGameOutcome(-1); // Lose
        }
        
    }

    return (
        <>
            <UserGuesses guesses={guesses} answer={answer} />
            <TextInput handleGuess={handleGuesses} gameOutcome={gameOutcome} />
            {gameOutcome === 1 ? (
                <WinBanner numOfGuesses={guesses.length} restart={restart} />
            ) : gameOutcome === -1 ? (
                <LoseBanner answer={answer} restart={restart} />
            ) : null}
        </>
    );
}

export default Game;
