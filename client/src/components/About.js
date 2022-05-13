import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-border">
        <div className="about-text-container">
          <img
            className="title-img"
            src={require("../assets/images/about.png")}
            alt="about"
          />
          <div className="title">
            <h1 className="title-text">{`Creations by \nDarrell`}</h1>{" "}
          </div>
        </div>
        <div className="about-text-container">
          <h1 className="about-text">
            Handcrafted in Northwest Arkansas, with passion, elegance, and
            expertise.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
