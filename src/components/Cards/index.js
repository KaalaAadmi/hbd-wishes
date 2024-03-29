// Cards.js
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import ConfettiAnimation from "./../Confetti"; // Import the Confetti component
import "./styles.css";

const Cards = ({ isLast, setIsLast }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        showNextImage(-1);
      } else if (event.key === "ArrowRight") {
        showNextImage(1);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const images = Array.from({ length: 30 }, (_, i) => i + 1);

  const showNextImage = (step) => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + step + images.length) % images.length
    );
    if (currentCardIndex === images.length - 1) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
  };

  const transitions = useTransition(currentCardIndex, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="cards-container">
      {transitions((style, index) => (
        <animated.div
          key={index}
          className="card"
          style={style}
          onClick={() => showNextImage(1)}
        >
          <img
            src={`assets/${
              index === 22 ? `${index + 1}.gif` : `${index + 1}.png`
            }`}
            alt=""
          />
          {/* Render ConfettiAnimation component when the last card is visible */}
          {index === images.length - 1 && (
            // {setIsLast(!isLast)}
            <ConfettiAnimation
              width={window.innerWidth}
              height={window.innerHeight}
            />
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default Cards;
