import { API_URL } from "../../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/${id}/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${product.name}. Please provide more information.`
  );

  return (
    <section
      style={{
        padding: "80px 50px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Product Image */}
        <div style={{ flex: 1 }}>
          <img
            src={`${API_URL}${product.image}`}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Product Details */}
        <div style={{ flex: 1 }}>
          <h1>{product.name}</h1>

          <p
            style={{
              marginTop: "10px",
              color: "#4b6f2f",
              fontWeight: "bold",
            }}
          >
            Category: {product.category}
          </p>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
            }}
          >
            {product.description}
          </p>

          <a
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                marginTop: "30px",
                padding: "12px 25px",
                backgroundColor: "#25D366",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Order via WhatsApp
            </button>
            {product.brochure && (
  <a
    href={`${API_URL}${product.brochure}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      style={{
        marginTop: "15px",
        marginLeft: "15px",
        padding: "12px 25px",
        backgroundColor: "#2d6a4f",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Download Brochure
    </button>
  </a>
)}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;