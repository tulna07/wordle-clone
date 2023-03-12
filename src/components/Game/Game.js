import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Components
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleAddGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  const win = guesses.at(-1) === answer;
  const lose = guesses.length === NUM_OF_GUESSES_ALLOWED && !win;
  const gameOver = win || lose;

  return (
    <>
      {lose && <LostBanner answer={answer} />}
      {win && <WonBanner numOfGuesses={guesses.length} />}
      <GuessResults items={guesses} answer={answer} />
      <GuessInput onAdd={handleAddGuess} disabled={gameOver} />
    </>
  );
}

export default Game;
