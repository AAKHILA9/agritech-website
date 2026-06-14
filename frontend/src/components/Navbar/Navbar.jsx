import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

function Navbar() {
  return (
    <>
      {/* Top Contact Bar */}
      <div
        style={{
          backgroundColor: "#4FC3D7",
          color: "#1f1f1f",
          padding: "8px 50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span>📞 +91-8106887059</span>
          <span>✉ info@agritech.com</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
          padding: "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "60px",
              height: "60px",
            }}
          />

          <h1
            style={{
              color: "#000",
              margin: 0,
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
            AgriTech
          </h1>
        </Link>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#4b6f2f",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          <Link
            to="/products"
            style={{
              color: "#4b6f2f",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Products
          </Link>

          <Link
            to="/about"
            style={{
              color: "#4b6f2f",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            About
          </Link>

          <Link
            to="/contact"
            style={{
              color: "#4b6f2f",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>

          <a
            href="/AgriTech_Premium_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#4b6f2f",
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Download Brochure
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;