import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AppRoutes from "../routes/AppRoutes";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

function MainLayout() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppButton/>
    </>
  );
}

export default MainLayout;