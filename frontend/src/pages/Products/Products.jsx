import { API_URL } from "../../config";
import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${API_URL}/api/categories/`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  return (
    <section
      style={{
        padding: "60px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            color: "#2d6a4f",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Our Product Portfolio
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            color: "#555",
            fontSize: "17px",
            lineHeight: "1.8",
          }}
        >
          Discover our comprehensive range of high-quality agricultural
          solutions designed to improve crop health, enhance productivity,
          and support sustainable farming practices.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "280px",
            borderRight: "1px solid #ddd",
            paddingRight: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "25px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />

          <h3
            style={{
              marginBottom: "20px",
              color: "#2d6a4f",
            }}
          >
            Product Categories
          </h3>

          <div style={{ lineHeight: "2.5" }}>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCategory("")}
            >
              All Products
            </p>

            {categories.map((category) => (
              <p
                key={category.id}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </p>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div
          style={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          }}
        >
        {filteredProducts.length === 0 && (
            <h3>No Products Found</h3>
    )}

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={`${API_URL}${product.image}`}
              title={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;