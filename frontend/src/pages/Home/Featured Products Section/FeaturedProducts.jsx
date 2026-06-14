import { API_URL } from "../../../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../../components/ProductCard/ProductCard";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/`)
      .then((response) => {
        setProducts(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section
      style={{
        padding: "80px 50px",
        textAlign: "center",
      }}
    >
      <h2>Featured Products</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
            style={{
              cursor: "pointer",
            }}
          >
            <ProductCard
              id={product.id}
              image={`${API_URL}${product.image}`}
              title={product.name}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;