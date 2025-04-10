import React from "react";
import "./newsec.css";

const cardData = [
  {
    title: "Decarbonisation",
    description: " At Applied Energy Technologies, we are dedicated to driving decarbonisation by offering advanced energy solutions tailored to our clients needs.Our bespoke power systems help businesses minimize their carbon footprint by optimizing energy efficiency. ",
    image: "https://res.cloudinary.com/dgif730br/image/upload/v1744201295/1_bbsszp.png",
  },
  {
    title: "  Democratisation",
    description: " At Applied Energy Technologies, we believe energy and technology should be accessible to all. Our Solutions bring reliable , Scalable power to remote locations, such as the World’s Highest AT and serve industries from telecommunications to banking. ",
    image: "https://res.cloudinary.com/dgif730br/image/upload/v1744201295/2_vi665c.png",
  },
  {
    title: "Digitalisation",
    description: "At Applied Energy Technologies, digitalisation is at the heart of what we do. Our dashboard integrates advanced AI, IoT, and data analytics, empowering businesses to streamline operations, improve energy efficiency, and make data-driven decisions.",
    image: "https://res.cloudinary.com/dgif730br/image/upload/v1744201298/3_tvdeyu.png",
  },
  {
    title: " Decentralisation",
    description: " Applied Energy Technologies decentralizes energy management with innovative microgrid solutions, enabling business to control their energy production and consumption independently or alongside the grid. Our solutions reduce reliance on central grids .  ",
    image:"https://res.cloudinary.com/dgif730br/image/upload/v1744201295/4_urvzlh.png"
  },
];

const FlipCards = () => {
  return (
    <div className="flip-cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="flip-card">
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front">
              <img src={card.image} alt={card.title} className="flip-card-image" />
              <h3 className="flip-card-title">{card.title}</h3>
            </div>
            {/* Back Side */}
            <div className="flip-card-back">
              <p className="flip-card-description">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards;
