// LandscapeWarning.js
import React, { useState, useEffect } from "react";
import "./styles.css";

const LandscapeWarning = ({ isPortrait }) => {
  return (
    <div className={`landscape-warning ${isPortrait ? "visible" : "hidden"}`}>
      <p>Please rotate your device to landscape mode to view the content.</p>
    </div>
  );
};

export default LandscapeWarning;
