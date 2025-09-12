import React from "react";
import "./AboutMe.css";
import ueberMich from "./ueberMich.png";
import frau from "./nadja.png";

export default function AboutMe() {
  return (
    <>
    <div id="about" /><div className="aboutme-wrapper">
      <div className="aboutme-container row align-items-center">
        <div className="col-md-6 aboutme-text">
          <img src={ueberMich} alt="Über mich" className="aboutme-heading" />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={frau} alt="Tattoo Künstlerin" className="aboutme-img" />
        </div>
      </div>
    </div>
    </>
  );
}