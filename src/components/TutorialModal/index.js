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
            <h1 style={{ color: "salmon", textAlign: "center" }}>
              HAPPY BIRTHDAY PUCHKI
            </h1>
            <p>
              Hey there{" "}
              <span style={{ fontWeight: "bold", color: "salmon" }}>
                <strong>Puchki</strong>
              </span>
              ,
              <br />
              Congratulations on turning{" "}
              <span style={{ fontSize: 16, fontWeight: "bold" }}>24</span>!🎉
              <br />
              Welcome to the ranks of the "oldie gang"! 😂
              <br />
              Jokes aside, I know last year was eventful with many ups and
              downs. But the good news is, you made it through! Wishing you an
              even better year ahead, filled with wonderful surprises and joyous
              moments. I hope your special day and the coming year are nothing
              short of amazing. This message comes straight from the heart, and
              since I'm better at coding and writing than expressing emotions at
              all (yup, I'm that nerdy geek! 😂), I've put together this little
              tutorial for you to navigate through the website.
              <br />
              <br />
              <strong>Here's how to use it:</strong>
              <br />
              <strong style={{ textDecoration: "underline" }}>
                On mobile devices:
              </strong>
              <br />
              simply tap on the cards to view the next one. Tap outside this
              white box to get started! Enjoy!
              <br />
              <br />
              <strong style={{ textDecoration: "underline" }}>
                If you're on a laptop,
              </strong>
              <br />
              use the left and right arrow keys to navigate through the images.
              Click on the cards to move to the next one. Again, click outside
              this white box to begin your journey!
              <br />
              <br />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "salmon",
                  fontSize: 24,
                }}
              >
                <strong>Hope you enjoy this! 😘</strong>
              </span>
            </p>
            {/* Add more tutorial content here */}
          </div>
        </div>
      )}
    </>
  );
};

export default TutorialModal;
