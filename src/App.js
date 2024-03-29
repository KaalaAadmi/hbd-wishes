// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import LandscapeWarning from "./components/LandscapeWarning";
import TutorialModal from "./components/TutorialModal";
import backgroundVideo from "./video/vid-background.mp4";
// import Confetti from "react-confetti/dist/types/Confetti";
import ConfettiAnimation from "./components/Confetti";

function App() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerWidth < window.innerHeight
  );
  const [isLast, setIsLast] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth < window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  console.log("isPortrait:", isPortrait);

  return (
    <div className="App">
      {isPortrait ? (
        <LandscapeWarning />
      ) : (
        <div id="container">
          <div id="video-container">
            {/* Your background video goes here */}
            <video id="background-video" autoPlay loop muted>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div id="video"></div>
          </div>
          <Cards isLast={isLast} setIsLast={setIsLast} />
          <TutorialModal />
          {isLast && <ConfettiAnimation />}
        </div>
      )}
    </div>
  );
}

export default App;
