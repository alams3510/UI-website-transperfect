import React from "react";

const Solutions = () => {
  return (
    <div className="landing">
      <div className="left-landing">
        <div className="landing-solution-left">
          <h1>Our Solutions</h1>
          <h2>Enabling customer experiences in every language</h2>
          <p>
            For more than 30 years, we’ve been helping our customers expand
            their global voice, whether that’s through a technical document, a
            localized website, an online store, a customer support center, or so
            much more. As our customers’ business offerings have evolved, so
            have our translation solutions. Our technology flexes to tell our
            customers’ stories and evolves as new ways of communicating grow.
          </p>
          <div className="d-flex gap-5 banner-btn">
            <button>Get in touch</button>
          </div>
        </div>
      </div>
      <div className="right-landing">
        <img
          alt="background-image"
          height={"50%"}
          loading="lazy"
          src="https://www.transperfect.com/sites/default/files/styles/responsive_image_1200/public/media/image/Solutions%202.jpg?itok=o2p_XvQc"
          className="bg-img-sol"
        />
      </div>
    </div>
  );
};

export default Solutions;
