import Navbar from "../components/Navbar";
import Hero from "../components2/Hero";
import Menu from "../components2/menu";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-8xl mx-auto px-6">
        <Hero />
        <Menu />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
