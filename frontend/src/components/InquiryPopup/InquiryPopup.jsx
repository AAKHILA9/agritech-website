import { useEffect, useState } from "react";

function InquiryPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupShown", "true");
  };

  if (!showPopup) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <button
          onClick={closePopup}
          style={{
            position: "absolute",
            right: "15px",
            top: "10px",
            border: "none",
            background: "none",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <h2 style={{ textAlign: "center" }}>
          Contact Us
        </h2>

        <input
          type="text"
          placeholder="Name"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <textarea
          rows="4"
          placeholder="Message"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <button
          onClick={closePopup}
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "12px",
            backgroundColor: "#4b6f2f",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit Inquiry
        </button>
      </div>
    </div>
  );
}

export default InquiryPopup;