import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carousel.css';

const importAll = (r) => r.keys().map(r);
const banners = importAll(require.context('../../media/banner', false, /\.(png|JPEG|svg)$/));

export default function Carousel() {
  if (banners.length === 0) return null;

  return (
    <>
    <div id="tattoos" /><div className="carousel-wrapper">
      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banners.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <img src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div className="carousel-indicators">
            {banners.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div></>
  );
}