import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

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
      <GuessInput
        onAdd={handleAddGuess}
        disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED}
      />
    </>
  );
}

export default Game;
