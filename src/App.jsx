import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Clean from "./components/clean/Clean";
import Testimonials from "./components/testimonials/Testimonials";
import Popular from "./components/popular/Popular";
import Footer from "./components/footer/Footer";
import SubFooter from "./components/subFooter/SubFooter";

import { FaAngleDoubleUp } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }

  render() {
    return (
      <main className="bg-white text-blue-950">
        <Header />
        <Hero />
        <Products />
        <Clean />
        <Testimonials />
        <Popular />
        <Footer />
        <SubFooter />
      </main>
    );
  }
}

export default App;
