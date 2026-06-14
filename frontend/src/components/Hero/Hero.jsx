import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";

function Hero() {
  const navigate = useNavigate();

  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/banners/`)
      .then((response) => {
        setSlides(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  };

  if (slides.length === 0) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Loading...
      </h2>
    );
  }

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
          Premium Agricultural Solutions For Better Farming
        </p>

        <button
          onClick={() => navigate("/products")}
          style={{
            padding: "12px 30px",
            border: "2px solid white",
            background: "transparent",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
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
          cursor: "pointer",
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
          cursor: "pointer",
        }}
      >
        ❯
      </button>
    </section>
  );
}

export default Hero;