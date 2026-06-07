import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
      <WhatsAppButton />
    </BrowserRouter>
    
  );
}

export default App;