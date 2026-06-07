import { useState, useEffect } from "react";

function InquiryPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "400px",
          maxWidth: "90%",
        }}
      >
        <h2>Get in Touch</h2>

        <input
          type="text"
          placeholder="Name"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
          }}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            backgroundColor: "green",
            color: "white",
            border: "none",
          }}
        >
          Submit
        </button>

        <button
          onClick={() => setShowPopup(false)}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "12px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default InquiryPopup;