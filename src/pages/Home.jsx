import React from "react";

import Herosection from "../components/Herosection";
import Cardsection from "../components/Cardsection";
import Product from "../components/Product";
import Exclusive from "../components/Exclusive";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Herosection />
      <Cardsection />
      <Product />
      <Exclusive />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
