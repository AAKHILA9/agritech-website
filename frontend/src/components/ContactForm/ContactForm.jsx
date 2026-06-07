import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${API_URL}/api/leads/`,
        formData
      );

      setSuccessMessage("Inquiry Submitted Successfully!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setSuccessMessage("Something went wrong!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <section
      style={{
        padding: "80px 50px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Contact Us
      </h1>

      <div
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Contact Form */}
        <div style={{ flex: 1 }}>
          <h2>Send Inquiry</h2>

          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          />

          <textarea
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          ></textarea>

          {successMessage && (
            <p
              style={{
                marginTop: "15px",
                color: successMessage.includes("Successfully")
                  ? "green"
                  : "red",
                fontWeight: "600",
              }}
            >
              {successMessage}
            </p>
          )}

          <button
            onClick={handleSubmit}
            style={{
              marginTop: "15px",
              padding: "12px 25px",
              backgroundColor: "#4b6f2f",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>

        {/* Contact Details */}
        <div style={{ flex: 1 }}>
          <h2>Contact Information</h2>

          <p style={{ marginTop: "20px" }}>
            📍 Hyderabad, Telangana, India
          </p>

          <p style={{ marginTop: "15px" }}>
            📞 +91 9876543210
          </p>

          <p style={{ marginTop: "15px" }}>
            ✉ info@agritech.com
          </p>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              style={{
                border: 0,
              }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;