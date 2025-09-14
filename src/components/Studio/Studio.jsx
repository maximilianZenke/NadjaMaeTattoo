import React from "react";
import "./Studio.css";
import studioText from './studio-text.png'
import studio from "./Studio.JPEG";

export default function Studio() {
  return (
    <>
      <div id="studio" />
      <div className="studio-wrapper">
        <div className="studio-container">
          <div className="studio-text-col">
            <img src={studioText} alt="Über mich" className="studio-heading" loading="lazy"/>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div className="studio-image-col">
            <img src={studio} alt="Tattoo Künstlerin" className="studio-img" loading="lazy"/>
          </div>
        </div>
      </div>
    </>
  );
}