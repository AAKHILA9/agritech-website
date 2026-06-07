function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        backgroundColor: "#25D366",
        color: "white",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "30px",
        zIndex: "1000",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      💬
    </a>
  );
}

export default WhatsAppButton;