import React from "react";

function GuessResults({ items }) {
  return (
    <div className="guess-results">
      {items.map((item, idx) => {
        return (
          <p key={idx} className="guess">
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
