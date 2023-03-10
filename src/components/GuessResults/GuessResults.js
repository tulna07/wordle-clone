import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ items, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(idx => {
        return <Guess key={idx} value={items[idx]} answer={answer} />;
      })}
    </div>
  );
}

// Related components -----------------------------------------------------------
function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map(idx => {
        return (
          <Cell
            key={idx}
            letter={result?.[idx].letter}
            status={result?.[idx].status}
          />
        );
      })}
    </p>
  );
}

function Cell({ letter, status }) {
  const className = ["cell", status].filter(Boolean).join(" ");

  return <span className={className}>{letter}</span>;
}

export default GuessResults;
