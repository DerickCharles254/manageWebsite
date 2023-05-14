import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Midsection from "./components/Midsection";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonial";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Midsection />
      <Testimonials />
      <Footer />
    </div>
  );
}
