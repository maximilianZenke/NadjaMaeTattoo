import React from "react";
import "./AboutMe.css";
import ueberMich from "./ueberMich.png";
import frau from "./nadja.png";

export default function AboutMe() {
  return (
    <>
      <div id="about" />
      <div className="aboutme-wrapper">
        <div className="aboutme-container row align-items-center">
          <div className="col-md-6 aboutme-text">
            <img
              src={ueberMich}
              alt="Über mich"
              className="aboutme-heading"
              loading="lazy"
            />

            <div className="aboutme-text-content">
              <p>
                Hi, ich bin Nadja, Tätowiererin aus Tübingen.
              </p>

              <p>
                Meine Liebe für's Tätowieren habe ich schon sehr früh entdeckt
                und seit ich 14 Jahre alt bin beschäftige ich mich intensiv damit.
                Seit ca. 12 Jahren arbeite ich nun schon selbstständig in dem
                Beruf und versuche mich stetig weiterzuentwickeln und meinen Stil
                zu verfeinern.
              </p>

              <p>
                Ich habe als Allrounderin angefangen, mich inzwischen aber vor
                allem auf „Neotraditional“ spezialisiert. Dieser Stil vereint die
                klare Linienführung des Traditional mit der leichten Farbgebung
                und Ornamenten des Jugendstils. Das erlaubt mir, mit der
                Formgebung des Körpers zu arbeiten, die Tätowierung aber trotzdem
                so haltbar wie möglich zu machen.
              </p>

              <p>
                Am liebsten arbeite ich in Farbe, Black'n Grey ist aber natürlich
                auch immer möglich.
              </p>

              <p>
                Mein anderer Schwerpunkt liegt beim Covern von alten
                Tätowierungen und Narben. Ich habe in den letzten Jahren in
                diesen Bereichen viel Erfahrung gesammelt und bin davon
                überzeugt, dass es immer eine Möglichkeit gibt, alte
                Tätowierungen oder Narben abzudecken oder zu verschönern.
              </p>

              <p>
                Wenn Ihr unsicher seid, was überhaupt möglich ist oder Euch eine
                konkrete Idee fehlt, können wir gerne ein unverbindliches
                Beratungsgespräch vereinbaren.
              </p>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={frau}
              alt="Tattoo Künstlerin"
              className="aboutme-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
