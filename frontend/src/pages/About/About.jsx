import aboutImage from "../../assets/images/about-company.jpg";

function About() {
  return (
    <section
      style={{
        padding: "80px 50px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#2d6a4f",
        }}
      >
        About Us
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side Image */}
        <div style={{ flex: 1 }}>
          <img
            src={aboutImage}
            alt="About Company"
            style={{
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Right Side Content */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              lineHeight: "1.8",
              fontSize: "18px",
              textAlign: "justify",
            }}
          >
            AgriTech is dedicated to providing high-quality agricultural
            products and innovative farming solutions that help farmers
            improve crop productivity and soil health. Our mission is to
            support sustainable agriculture through reliable fertilizers,
            advanced farming techniques, and expert guidance.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "18px",
              textAlign: "justify",
              marginTop: "20px",
            }}
          >
            We focus on delivering trusted agricultural solutions that
            enhance crop growth, increase yields, and contribute to the
            long-term success of farmers. With a commitment to quality,
            innovation, and customer satisfaction, we strive to be a
            preferred partner in modern agriculture.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            width: "250px",
            padding: "20px",
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <h3>🌱 Quality Products</h3>
          <p>Premium fertilizers and agricultural solutions.</p>
        </div>

        <div
          style={{
            width: "250px",
            padding: "20px",
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <h3>🚚 Fast Delivery</h3>
          <p>Reliable and timely product delivery.</p>
        </div>

        <div
          style={{
            width: "250px",
            padding: "20px",
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <h3>🤝 Expert Support</h3>
          <p>Professional guidance for better farming results.</p>
        </div>
      </div>
    </section>
  );
}

export default About;