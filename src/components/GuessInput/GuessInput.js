import { useState } from "react";

function GuessInput({ onAdd }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        required
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
