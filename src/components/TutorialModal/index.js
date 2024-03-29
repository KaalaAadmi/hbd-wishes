// TutorialModal.js
import React, { useState, useEffect } from "react";
import "./styles.css";

const TutorialModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleCloseModal = (event) => {
      if (event.target.classList.contains("modal")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleCloseModal);

    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>Welcome to the Tutorial</h2>
            <p>
              Welcome to the Birthday Wishes website! Use left and right arrow
              keys to navigate through the images. Click on the cards to view
              the next image. Enjoy!
            </p>
            {/* Add more tutorial content here */}
          </div>
        </div>
      )}
    </>
  );
};

export default TutorialModal;
