import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <section
        style={{
          padding: "60px 50px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Get in touch with us for product
          inquiries and agricultural solutions.
        </p>
      </section>

      <ContactForm />

      <section
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2>Our Contact Information</h2>

        <p>📍 Hyderabad, Telangana, India</p>

        <p>📞 +91 9876543210</p>

        <p>✉ info@agritech.com</p>
      </section>
    </>
  );
}

export default Contact;