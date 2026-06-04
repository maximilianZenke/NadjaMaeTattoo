import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carousel.css';

const importAll = (r) => r.keys().map(r);
const banners = importAll(require.context('../../media/banner', false, /\.(png|jpeg|svg)$/));

const MOBILE_BREAKPOINT = 992;

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (banners.length === 0) return null;

  const slides = isMobile
    ? banners.map((img) => [img])
    : (() => {
      const pairs = [];
      for (let i = 0; i < banners.length; i += 2) {
        pairs.push(banners.slice(i, i + 2));
      }
      return pairs;
    })();

  return (
    <>
      <div id="tattoos" />
      <div className="carousel-wrapper">
        {/* carousel-container ist der stabile Anker für die Buttons */}
        <div className="carousel-container">

          {/* Buttons direkt im container — NICHT im Bootstrap-carousel */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {slides.map((pair, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="carousel-slide-content">
                    {pair.map((img, imgIndex) => (
                      <div key={imgIndex} className="image-wrapper">
                        <img src={img} alt="" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}