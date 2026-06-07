import AboutSection from "./About Section/About Section";
import Categories from "./Categories Section/Categories";
import FeaturedProducts from "./Featured Products Section/FeaturedProducts";

import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import ContactForm from "../../components/ContactForm/ContactForm";
import Hero from "../../components/Hero/Hero";
import BannerSlider from "../../components/BannerSlider/BannerSlider";

function Home() {
  return (
    <>
      <Hero/>

      <AboutSection />

      <WhyChooseUs />

      <Categories />

      <FeaturedProducts />

      <ContactForm />

      
    </>
  );
}

export default Home;