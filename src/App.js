// App.js
import React, { useState, useEffect } from "react";
import ConfettiAnimation from "./Confetti"; // Import the Confetti component
import Cards from "./Cards";
import LandscapeWarning from "./LandscapeWarning";
import TutorialModal from "./TutorialModal";
import "./styles.css";

const App = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.innerWidth < window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth < window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if fullscreen is supported by the browser
    if (document.fullscreenEnabled) {
      // If in portrait mode on mobile, request fullscreen
      if (isPortrait && window.innerWidth <= 768) {
        document.documentElement.requestFullscreen();
      }
    }
  }, [isPortrait]);

  return (
    <div className="App">
      {isPortrait ? (
        <LandscapeWarning />
      ) : (
        <div id="container">
          <div id="background-video">
            {/* Your background video goes here */}
          </div>
          <Cards />
          <TutorialModal />
          {/* Render ConfettiAnimation component on the entire page */}
          {/* <ConfettiAnimation /> */}
        </div>
      )}
    </div>
  );
};

export default App;
