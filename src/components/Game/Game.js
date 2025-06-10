import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import TextInput from '../TextInput';
import UserGuesses from '../UserGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);

  function handleGuesses(guess) {
    const newGuesses = [...guesses, {guess, id: crypto.randomUUID()}];
    setGuesses(newGuesses);
  }

  return (
  <>
      <UserGuesses guesses={guesses}/>
      <TextInput handleGuess={handleGuesses} />
  </>
  )
}

export default Game;
