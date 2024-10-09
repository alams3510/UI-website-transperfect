import React, { useState } from "react";

const images = [
  "https://www.transperfect.com/sites/default/files/styles/logo_carousel_item/public/media/image/P_G.png?itok=JCwcIN5Z",
  "https://www.transperfect.com/sites/default/files/styles/logo_carousel_item/public/media/image/The_Body_Shop.png?itok=6cyzwx49",
  "https://www.transperfect.com/sites/default/files/styles/logo_carousel_item/public/media/image/trek.png?itok=5Q_Ki2TU",
  "https://www.transperfect.com/sites/default/files/styles/logo_carousel_item/public/media/image/united-airlines.png?itok=LzOKK2YD",
  "https://www.transperfect.com/sites/default/files/styles/logo_carousel_item/public/media/image/Burton2.png?itok=-m-EHnIx",
  "https://www.transperfect.com/sites/default/files/styles/logo_carousel_item/public/media/image/citrix-logo-black.png?itok=r_s0Xo8F",
  "https://www.transperfect.com/sites/default/files/styles/logo_carousel_item/public/media/image/Electrolux.png?itok=TwEhwb19",
  "https://www.transperfect.com/sites/default/files/styles/logo_carousel_item/public/media/image/Lufthansa.png?itok=7AKNP7ow",
  // Add more images as needed
];

const Slider = ({ size }) => {
  const [currentImages, setCurrentImages] = useState(images);

  const slideLeft = () => {
    setCurrentImages((prev) => {
      const lastElem = prev[prev.length - 1];
      const remainingItems = prev.slice(0, prev.length - 1);
      return [lastElem, ...remainingItems];
    });
  };

  const slideRight = () => {
    setCurrentImages((prev) => {
      const firstElem = prev[0];
      const remainingItems = prev.slice(1);
      return [...remainingItems, firstElem];
    });
  };

  return (
    <div className="slider-container" style={{ width: size }}>
      <button className="slider-button left" onClick={slideLeft}>
        &#10094;
      </button>
      <div
        className="slider-content"
        // style={{ transform: `translateX(-${currentIndex * 10}%)` }}
      >
        {currentImages.map((image, index) => (
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider-image"
            key={index}
            width={"100%"}
          />
        ))}
      </div>
      <button className="slider-button right" onClick={slideRight}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
