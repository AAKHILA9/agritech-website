import { useState } from "react";

import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";


function Hero() {
  const slides = [
  {
    image: product1,
    title: "High Quality Agricultural Products",
    description:
      "Reliable fertilizer and crop nutrition solutions for modern farming.",
  },
  {
    image: product2,
    title: "Crop Growth & Protection Solutions",
    description:
      "Supporting healthy crops with advanced agricultural products.",
  },
  {
    image: product3,
    title: "Improving Yield Through Innovation",
    description:
      "Delivering sustainable farming solutions for long-term productivity.",
  },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      style={{
        height: "90vh",
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          {slides[currentSlide].title}
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginBottom: "30px",
          }}
        >
          {slides[currentSlide].description}
        </p>

        <button
          style={{
            padding: "12px 30px",
            border: "2px solid white",
            background: "transparent",
            color: "white",
            fontSize: "18px",
          }}
        >
          Explore Products
        </button>
      </div>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "40px",
          background: "none",
          border: "none",
          color: "white",
          zIndex: 3,
        }}
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "40px",
          background: "none",
          border: "none",
          color: "white",
          zIndex: 3,
        }}
      >
        ❯
      </button>
    </section>
  );
}

export default Hero;