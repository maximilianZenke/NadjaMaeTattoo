import React from "react";
import './App.css';
import banner from './logo.jpg';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="banner-container">
        <img src={banner} alt="Banner" className="banner-img" />
      </div>
      <Carousel />
      <div>
        <h1>Test</h1>
      </div>
    </div>
  );
}