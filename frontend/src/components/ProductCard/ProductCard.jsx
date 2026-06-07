import { Link } from "react-router-dom";

function ProductCard({ id, image, title, description }) {
  return (
    <Link
      to={`/products/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: "280px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "0.3s ease",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "20px" }}>
          <h3>{title}</h3>

          <p>{description}</p>

          <button
            style={{
              marginTop: "10px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 15px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            View Product
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;