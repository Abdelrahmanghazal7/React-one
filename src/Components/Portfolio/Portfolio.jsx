import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Underline from "../Underline/Underline";
import One from "../../assets/Projects/1.jpg";
import Two from "../../assets/Projects/2.jpg";
import Three from "../../assets/Projects/3.jpg";
import Four from "../../assets/Projects/4.jpg";
import Five from "../../assets/Projects/5.jpg";
import Six from "../../assets/Projects/6.jpg";
import Seven from "../../assets/Projects/7.jpg";
import Eight from "../../assets/Projects/8.jpg";
import Nine from "../../assets/Projects/9.jpg";

const Portfolio = () => {
  const [myImages, setMyImages] = useState([]);
  const [lightBoxContainerVisible, setLightBoxContainerVisible] =
    useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const images = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
    setMyImages(images);

    return () => {
      setMyImages([]);
    };
  }, []);

  const openSlider = (index) => {
    setLightBoxContainerVisible(true);
    setCurrentIndex(index);
  };

  const closeLightBox = (e) => {
    if (e.target.id === "lightBoxContainer") {
      setLightBoxContainerVisible(false);
    }
  };

  return (
    <section className="portfolio animate__animated animate__fadeIn">
      <div className="container text-center">
        <div>
          <h2>Portfolio</h2>
          <Underline />
        </div>

        <div className="row gy-4">
          {myImages.map((image, index) => (
            <div
              className="img-bg col-lg-4 col-md-6"
              onClick={() => openSlider(index)}
              key={index}
            >
              <img className="w-100" src={image} alt={index} />
            </div>
          ))}
        </div>
      </div>

      {lightBoxContainerVisible && (
        <div id="lightBoxContainer" onClick={closeLightBox}>
          <div
            id="lightBox"
            style={{ backgroundImage: `url(${myImages[currentIndex]})` }}
          ></div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
