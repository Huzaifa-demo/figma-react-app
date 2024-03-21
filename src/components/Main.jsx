import React from "react";
import "./style.css";
import Header from "./Header";
import EventSection from "./EventSection";
import FeaturedSec from "./FeaturedSec";
import Rating from "./Rating";
import Form from "./Form";
import Footer from "./Footer";


const main = () => {
  return (
    <div>
      <Header />
      <EventSection />
      <FeaturedSec />
      <Rating />
      <Form />
      <Footer />
    </div>
  );
};

export default main;
