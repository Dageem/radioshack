import React, { useState } from "react";
import "./home.css";

const HomeFocal = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://wallpapers.com/images/hd/recording-studio-background-1920-x-1080-10tp6s850de7td56.jpg",
    "https://www.billboard.com/wp-content/uploads/2022/10/studios-sonasterio-live-room-billboard-bb13-2022-1-1260.jpg",
    "https://img.freepik.com/free-photo/phone-with-music-icon-headphones-blurred-background-music-listening-concept-copy-space_169016-14361.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698364800&semt=ais",
  ];

  const textOverlays = ["Commercial Products", "Personal Devices", "All Products"];

  const handleTextHover = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="focal__image-container">
      <img src={images[currentImage]} alt="" />
      <div className="text-overlay">
        {textOverlays.map((text, index) => (
          <p key={index} onMouseEnter={() => handleTextHover(index)}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HomeFocal;


