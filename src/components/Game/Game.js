import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import TextInput from "../TextInput";
import UserGuesses from "../UserGuesses";
import WinBanner from "../WinBanner";
import LoseBanner from "../LoseBanner";
import Keyboard from "../Keyboard";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { KEYS } from "../../constants";

import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
//
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [gameOutcome, setGameOutcome] = React.useState(0); // 0 = ongoing, 1 = win, -1 = lose
    const [keyDict, setKeyDict] = React.useState(() => {
        let dict = {};

        for (let row of KEYS) {
            for (let letter of row) {
                dict[letter] = null;
            }

            return dict;
        }
    });

    function updateDict(guesses) {
        const checkedArrays = guesses.map((object) => {
            return checkGuess(object.guess, answer);
        });

        if (checkedArrays.length === 0) {
            return;
        }

        const updatedDict = { ...keyDict };

        let lastArr = checkedArrays.slice(-1)[0];
        for (let { letter, status } of lastArr) {
          if (status === "incorrect") {
              updatedDict[letter] = "incorrect";
          }
          
          if (
              status === "misplaced" &&
              updatedDict[letter] !== "correct"
          ) {
              updatedDict[letter] = "misplaced";
          }
          
          if (status === "correct") {
              updatedDict[letter] = "correct";
          }
        }

        setKeyDict(updatedDict);
    }

    function restart() {
        setGuesses([]);
        setGameOutcome(0);
        setKeyDict(() => {
            let dict = {};

            for (let row of KEYS) {
                for (let letter of row) {
                    dict[letter] = null;
                }

                return dict;
            }
        });
        answer = sample(WORDS);
        console.info({ answer });
    }

    function handleGuesses(guess) {
        const newGuesses = [...guesses, { guess, id: crypto.randomUUID() }];

        setGuesses(newGuesses);

        updateDict(newGuesses);

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
            <Keyboard keyDict={keyDict} />
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
