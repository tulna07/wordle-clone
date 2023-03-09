import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ items }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(idx => {
        return <Guess key={idx}>{items[idx]}</Guess>;
      })}
    </div>
  );
}

function Guess({ children }) {
  return (
    <p className="guess">
      {range(5).map(idx => {
        return (
          <span key={idx} className="cell">
            {children ? children[idx] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default GuessResults;
