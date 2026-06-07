import aboutBg from "../../../assets/images/about-home-bg.jpg";

function AboutSection() {
  return (
    <section
      style={{
        padding: "80px 50px",
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.88)",
          padding: "50px",
          borderRadius: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2d6a4f",
            fontSize: "36px",
            marginBottom: "20px",
          }}
        >
          About Our Company
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            lineHeight: "1.8",
            color: "#555",
            fontSize: "18px",
          }}
        >
          We are committed to providing high-quality agricultural products
          and innovative farming solutions that help farmers improve crop
          productivity, enhance soil health, and achieve sustainable growth.
          Our mission is to support modern agriculture with reliable and
          effective products.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "15px",
              minWidth: "220px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h1 style={{ color: "#2d6a4f" }}>500+</h1>
            <p>Farmers Served</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "15px",
              minWidth: "220px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h1 style={{ color: "#2d6a4f" }}>50+</h1>
            <p>Products</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "15px",
              minWidth: "220px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h1 style={{ color: "#2d6a4f" }}>10+</h1>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;