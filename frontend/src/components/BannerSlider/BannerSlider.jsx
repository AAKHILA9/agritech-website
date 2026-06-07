import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

function BannerSlider() {
  const banners = [
    {
      image: product1,
      title: "Premium Agricultural Solutions",
      description: "Helping farmers achieve higher yields.",
    },
    {
      image: product2,
      title: "High Quality Crop Protection",
      description: "Protect your crops effectively.",
    },
    {
      image: product3,
      title: "Innovative Bio Products",
      description: "Sustainable farming for the future.",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              height: "90vh",
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "30px",
                borderRadius: "10px",
              }}
            >
              <h1>{banner.title}</h1>
              <p>{banner.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerSlider;