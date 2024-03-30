// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import LandscapeWarning from "./components/LandscapeWarning";
import TutorialModal from "./components/TutorialModal";
import backgroundVideo from "./video/vid-background.mp4";
import videoBg from "./video/vid-background.webm";
// import Confetti from "react-confetti/dist/types/Confetti";
import ConfettiAnimation from "./components/Confetti";
import { useFullScreenHandle } from "react-full-screen";
import Favicon from "react-favicon";

// import vBg from "./video/videoBg.mp4";

function App() {
  const handle = useFullScreenHandle(); // Get handle for fullscreen functionality
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = ["video/vid-background.mp4", "video/videoBg.mp4"]; // Array of video file names
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
  useEffect(() => {
    // If in landscape mode on mobile, request fullscreen
    if (!isPortrait && window.innerWidth <= 768) {
      handle.enter();
    }
  }, [isPortrait, handle]);
  // Function to handle switching to the next video
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  return (
    <div className="App">
      {isPortrait ? (
        <>
          <Favicon url="logo2.png" />
          <LandscapeWarning />
        </>
      ) : (
        <>
          <Favicon url="logo2.png" />
          <div id="container">
            <div id="video-container">
              {/* Your background video goes here */}
              <video id="background-video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
                <source src={videoBg} type="video/webm" />
              </video>
              <div id="video"></div>
            </div>
            <Cards isLast={isLast} setIsLast={setIsLast} />
            <TutorialModal />
            {isLast && <ConfettiAnimation />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
