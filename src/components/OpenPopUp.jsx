import React, { useState } from "react";
import Popup from "./Popup";
import "./popup.css";

const OpenPopUp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="container">
      <button className="open btn" onClick={() => setShowPopup(true)}>
        Open
      </button>

      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
};
export default OpenPopUp;
