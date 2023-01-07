import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/HeaderS/Header";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Product/Product";
import Slider from "./Components/Slider/Slider";
import Testinmonial from "./Components/Testimonial/Testinmonial.jsx";
import Virtual from "./Components/Virtual/Virtual.jsx";

function App() {
  return (
    <div className="App">
      {" "}
      <Header />
      <Hero />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br />
      <Slider />
      <Virtual />
      <Product />
      <Testinmonial />
      <Footer />
    </div>
  );
}

export default App;
