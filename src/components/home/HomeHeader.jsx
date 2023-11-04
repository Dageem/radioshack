import React from "react";

function HomeHeader() {
  return (
    <div className="homeheader__container">
      <div className="homeheader-image3">
        <div className="image-container">
          <img
            src="https://i.pcmag.com/imagery/reviews/007bm2BIEW7dZXZXZ1bByor-1..v1694905206.jpg"
            alt=""
          />
          <div className="image-overlay">Earbuds</div>
        </div>
      </div>
      <div className="homeheader-image1">
        <div className="image-container">
          <img
            src="https://hackaday.com/wp-content/uploads/2021/04/2021-05-01-8.png?w=800"
            alt=""
          />
          <div className="image-overlay">Speakers</div>
        </div>
      </div>
      <div className="homeheader-image2">
        <div className="image-container">
          <img
            src="https://i.pcmag.com/imagery/reviews/05f9FyjImVHcr0TogLTOESS-1..v1697422912.jpg"
            alt=""
          />
          <div className="image-overlay">Headphones</div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;

