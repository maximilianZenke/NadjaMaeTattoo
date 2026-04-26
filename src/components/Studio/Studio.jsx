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
          <div className="studio-image-col">
            <img src={studio} alt="Studio Villa bunter Hund" className="studio-img" loading="lazy" />
          </div>
          <div className="studio-text-col">
            <img src={studioText} alt="Studio" className="studio-heading" loading="lazy" />
            <p className="studio-body">
              Zusammen mit zwei Kolleg*innen bin ich Hauptverantwortliche im Tattoo Kollektiv <span className="studio-intro-name">Villa bunter Hund, </span>
              ein Ort für gemeinschaftliches, kreatives Arbeiten in gemütlicher Atmosphäre, ein bisschen versteckt in Tübingen-Lustnau. Nur auf Termin geöffnet, aber jeden ersten Samstag im Monat heißen wir euch bei{" "}
              <span className="studio-highlight">Tats'n Tea</span>{" "}
              willkommen: vorbeischauen, kennenlernen, beraten oder tätowieren lassen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}