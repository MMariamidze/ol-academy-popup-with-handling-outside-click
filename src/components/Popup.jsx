import React, { useEffect, useRef } from "react";
import "./popup.css";

const Popup = ({ onClose }) => {
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (!popupRef.current?.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("click", handleClick);
  }, [onClose]);
  return (
    <div className="popup">
      <div className="innerPopup" ref={popupRef}>
        <h1>popup is opened</h1>
        <button className="close btn" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
};
export default Popup;
