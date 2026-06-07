import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpeg";
function Gallery() {
  const images = [product1, product2, product3, product4];

  return (
    <section
      style={{
        padding: "80px 50px",
        textAlign: "center",
      }}
    >
      <h1>Gallery</h1>

      <p
        style={{
          marginBottom: "40px",
        }}
      >
        Explore our agricultural products and farming solutions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;