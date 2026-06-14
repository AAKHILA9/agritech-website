import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1b4332",
        color: "white",
        padding: "50px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* Company */}
        <div>
          <h3>AgriTech</h3>
          <p>
            Providing high-quality agricultural and fertilizer solutions
            for sustainable farming and better crop yields.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>

          <p>
            <Link
              to="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
          </p>

          <p>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </p>

          <p>
            <Link
              to="/products"
              style={{ color: "white", textDecoration: "none" }}
            >
              Products
            </Link>
          </p>

          <p>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </p>
        </div>

        {/* Products */}
        <div>
          <h3>Products</h3>

          <p>
            <Link
              to="/products"
              style={{ color: "white", textDecoration: "none" }}
            >
              Fertilizers
            </Link>
          </p>

          <p>
            <Link
              to="/products"
              style={{ color: "white", textDecoration: "none" }}
            >
              Pesticides
            </Link>
          </p>

          <p>
            <Link
              to="/products"
              style={{ color: "white", textDecoration: "none" }}
            >
              Bio Products
            </Link>
          </p>

          <p>
            <Link
              to="/products"
              style={{ color: "white", textDecoration: "none" }}
            >
              Growth Promoters
            </Link>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact Us</h3>
          <p>📞 +91 9876543210</p>
          <p>✉ info@agritech.com</p>
          <p>📍 Hyderabad, Telangana</p>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0",
          borderColor: "#ffffff30",
        }}
      />

      <p
        style={{
          textAlign: "center",
        }}
      >
        © 2026 AgriTech. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;