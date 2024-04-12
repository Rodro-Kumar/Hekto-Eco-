import React from "react";
import Header from "../CommonComponent/Header/Header";
import Hero from "../HomeComponent/Hero/Hero";
import FeatureProduct from "../HomeComponent/FeatureProduct/FeatureProduct";
import LatestProduct from "../HomeComponent/LatestProduct/LatestProduct";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureProduct />
      <LatestProduct />
    </>
  );
};

export default Home;
