import React from "react";
import "./AboutMe.css";
import ueberMich from "./ueberMich.png";
import frau from "./nadja.png";

export default function AboutMe() {
    return (
        <>
            <div id="about" />
            <div className="aboutme-wrapper">
                <div className="aboutme-container">

                    <img
                        src={ueberMich}
                        alt="Über mich"
                        className="aboutme-heading"
                        loading="lazy"
                    />

                    <div className="aboutme-top">
                        <div className="aboutme-text">
                            <p className="aboutme-greeting">
                                <span>Hi,</span>
                                <span>ich bin</span>
                                <span className="name">Nadja.</span>
                            </p>
                        </div>

                        <div className="text-center">
                            <img
                                src={frau}
                                alt="Tattoo Künstlerin"
                                className="aboutme-img"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <hr className="aboutme-divider" />

                    <div className="aboutme-columns">

                        <div className="aboutme-block">
                            <span className="aboutme-block-title">Mein Stil</span>
                            <p>
                                Ich habe als Allrounderin angefangen und mich inzwischen auf{" "}
                                <em>Neotraditional</em> spezialisiert – ein Stil, der die klare
                                Linienführung des Traditional mit der leichten Farbgebung und
                                Ornamenten des Jugendstils verbindet. Am liebsten arbeite ich in
                                Farbe, Black'n Grey ist aber natürlich auch möglich.
                            </p>
                        </div>

                        <div className="aboutme-block">
                            <span className="aboutme-block-title">Warum Neotraditional?</span>
                            <p>
                                Dieser Stil erlaubt mir, mit der Formgebung des Körpers zu arbeiten
                                und die Tätowierung trotzdem so haltbar wie möglich zu gestalten –
                                Ästhetik und Langlebigkeit gehen hier Hand in Hand.
                            </p>
                        </div>

                        <div className="aboutme-block">
                            <span className="aboutme-block-title">Cover-Ups & Narben</span>
                            <p>
                                Mein zweiter Schwerpunkt liegt beim Überarbeiten alter Tätowierungen
                                und beim Abdecken von Narben. Ich habe in diesen Bereichen viel
                                Erfahrung gesammelt und bin überzeugt: Es gibt immer eine Möglichkeit,
                                etwas zu verschönern.
                            </p>
                        </div>

                        <div className="aboutme-block">
                            <span className="aboutme-block-title">Unverbindliche Beratung</span>
                            <p>
                                Ihr seid unsicher, was möglich ist, oder habt noch keine konkrete
                                Idee? Meldet euch gerne – wir finden gemeinsam heraus, was zu euch
                                passt.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}