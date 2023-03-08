import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Components
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleAddGuess(guess) {
    setGuesses([...guesses, guess]);
    console.log(guesses);
  }

  return (
    <>
      <GuessResults items={guesses} />
      <GuessInput onAdd={handleAddGuess} />
    </>
  );
}

export default Game;
