import React from "react";
import Footer from "../Footer/Footer";
import Offers from "./Offers/Offers";
import Popular from "./PopularServices/Popular";
import Services from "./ServicesComponent/Services";

export const Home = () => {
  return (
    <div>
      <Popular />
      <Services />
      <Offers />
      <Footer />
    </div>
  );
};
