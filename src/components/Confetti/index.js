// Confetti.js
import React from "react";
import Confetti from "react-confetti";

const ConfettiAnimation = () => {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={300}
    />
  );
};

export default ConfettiAnimation;
