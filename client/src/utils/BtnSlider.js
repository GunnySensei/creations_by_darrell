import React from "react";
import rightArrow from "../assets/images/right-arrow.svg";
import leftArrow from "../assets/images/left-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="next" />
    </button>
  );
}
