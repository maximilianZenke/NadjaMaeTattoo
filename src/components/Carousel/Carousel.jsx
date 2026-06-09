import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carousel.css';

const importAll = (r) => r.keys().map(r);
const banners = importAll(require.context('../../media/banner', false, /\.(png|jpeg|svg)$/));

const MOBILE_BREAKPOINT = 992;

// Alle Banner-Bilder im Hintergrund vorladen
function preloadImages(urls) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );
  const [imagesReady, setImagesReady] = useState(false);

  // Bilder beim ersten Render vorladen
  useEffect(() => {
    let loaded = 0;
    banners.forEach((url) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === banners.length) setImagesReady(true);
      };
      img.src = url;
    });
  }, []);

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
        <div className="carousel-container">

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          {/* Carousel erst anzeigen wenn alle Bilder geladen sind */}
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ opacity: imagesReady ? 1 : 0, transition: "opacity 0.3s ease" }}
          >
            <div className="carousel-inner">
              {slides.map((pair, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="carousel-slide-content">
                    {pair.map((img, imgIndex) => (
                      <div key={imgIndex} className="image-wrapper">
                        {/* kein loading="lazy" — Bilder sind bereits vorgeladen */}
                        <img src={img} alt="" />
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