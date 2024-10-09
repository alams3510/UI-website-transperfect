import React from "react";

const Card = ({ data, size }) => {
  return (
    <div class="card cardWrapper" style={{ width: size }}>
      <img
        src={data.image}
        class="card-img-top"
        alt="card image"
        height={"100%"}
        className="card-image-fit"
      />
      <div className="card-main-body">
        <div class="card-header text-center">
          <h1>{data?.heading}</h1>
          <h6>{data?.title}</h6>
        </div>
        <div class="card-body">
          <p class="card-text">{data.desc}</p>
          <div>
            <h6>{data.title ? "" : "CASE STUDY"}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
