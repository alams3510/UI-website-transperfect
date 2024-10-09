import React, { useState } from "react";
import Card from "./Card";

const data = [
  {
    image:
      "https://www.transperfect.com/sites/default/files/styles/responsive_image_2000/public/media/image/shutterstock_575099473.jpg?itok=W93WfzBd",
    heading: "Citrix",
    desc: "Ctrix manages 21 websites by only 2 people with global link",
  },
  {
    image:
      "https://www.transperfect.com/sites/default/files/styles/responsive_image_2000/public/media/image/shutterstock_533324158.jpg?itok=lM_fbsow",
    heading: "Citrix",
    desc: "Ctrix manages 21 websites by only 2 people with global link",
  },
  {
    image:
      "https://www.transperfect.com/sites/default/files/styles/responsive_image_2000/public/media/image/Citrix%20Digital%20Workspace.jpg?itok=rgB5MKh0",
    heading: "Citrix",
    desc: "Ctrix manages 21 websites by only 2 people with global link",
  },
  {
    image:
      "https://www.transperfect.com/sites/default/files/styles/responsive_image_2000/public/media/image/Customer%20Experience%20platform.jpg?itok=mLBtPvi8",
    heading: "Citrix",
    desc: "Ctrix manages 21 websites by only 2 people with global link",
  },
  {
    image:
      "https://www.transperfect.com/sites/default/files/styles/responsive_image_2000/public/media/image/Lufthansa.jpg?itok=FE4YN6iB",
    heading: "Citrix",
    desc: "Ctrix manages 21 websites by only 2 people with global link",
  },

  // Add more images as needed
];

const CardSlider = ({ size }) => {
  const [currentData, setCurrentData] = useState(data);

  const slideLeft = () => {
    setCurrentData((prev) => {
      const lastElem = prev[prev.length - 1];
      const remainingItems = prev.slice(0, prev.length - 1);
      return [lastElem, ...remainingItems];
    });
  };

  const slideRight = () => {
    setCurrentData((prev) => {
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
        className="slider-content-card"
        // style={{ transform: `translateX(-${currentIndex * 10}%)` }}
      >
        {currentData.slice(0, 3).map((data, index) => (
          <Card data={data} key={index} size={"40rem"} />
        ))}
      </div>
      <button className="slider-button right" onClick={slideRight}>
        &#10095;
      </button>
    </div>
  );
};

export default CardSlider;
