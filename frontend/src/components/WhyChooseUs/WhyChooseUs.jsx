import whyChooseBg from "../../assets/images/why-choose-us-bg.jpg";

function WhyChooseUs() {
  return (
    <section
      style={{
        padding: "80px 50px",
        backgroundImage: `url(${whyChooseBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.90)",
          padding: "50px",
          borderRadius: "20px",
          maxWidth: "1200px",
          margin:"120px auto 0 auto",
          textAlign: "center",
          marginTop: "137px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
            color: "#2d6a4f",
            fontSize: "36px",
          }}
        >
          Why Choose Us?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 40px",
            color: "#555",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          We provide innovative agricultural solutions that help farmers
          improve productivity, crop quality, and overall profitability.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div
            style={{
              width: "280px",
              padding: "25px",
              backgroundColor: "white",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>🌱 Quality Products</h3>
            <p>
              Premium fertilizers and agricultural products designed to
              enhance soil health and crop yield.
            </p>
          </div>

          <div
            style={{
              width: "280px",
              padding: "25px",
              backgroundColor: "white",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>🚚 Fast Delivery</h3>
            <p>
              Timely and reliable delivery to ensure farmers receive
              products when they need them most.
            </p>
          </div>

          <div
            style={{
              width: "280px",
              padding: "25px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>🤝 Expert Support</h3>
            <p>
              Dedicated customer support and agricultural guidance to help
              maximize farming success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;