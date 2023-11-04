import React from "react";

function Options() {
  return (
    <div className="homeheader__container">
      <div className="homeheader-image3">
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Neumann_U47_Tube.jpg/1200px-Neumann_U47_Tube.jpg"
            alt=""
          />
          <div className="image-overlay">Microphones</div>
        </div>
      </div>
      <div className="homeheader-image1">
        <div className="image-container">
          <img
            src="https://i.pinimg.com/originals/43/f1/e6/43f1e6341412508f686d6bc41d582c0f.jpg"
            alt=""
          />
          <div className="image-overlay">Studio Equipment</div>
        </div>
      </div>
      <div className="homeheader-image2">
        <div className="image-container">
          <img
            src="https://otrs.com/wp-content/uploads/Customer-Support-Team-1-1440x625.webp"
            alt=""
          />
          <div className="image-overlay">Customer Support</div>
        </div>
      </div>
    </div>
  );
}

export default Options;