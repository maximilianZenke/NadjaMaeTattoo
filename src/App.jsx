import React from "react";
import './App.css';
import banner from './logo.jpg';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AboutMe from "./components/AboutMe/AboutMe";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="banner-container">
        <img src={banner} alt="Banner" className="banner-img" loading="eager"/>
      </div>
      <Carousel />
      <div style={{ height: '50px', width: '100%' }}></div>
      <AboutMe />
      <div style={{ height: '10px', width: '100%' }}></div>
    </div>
  );
}