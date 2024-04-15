import React from "react";
import Header from "../CommonComponent/Header/Header";
import Hero from "../HomeComponent/Hero/Hero";
import FeatureProduct from "../HomeComponent/FeatureProduct/FeatureProduct";
import LatestProduct from "../HomeComponent/LatestProduct/LatestProduct";
import Offer from "../HomeComponent/Offer/Offer";
import Feature from "../HomeComponent/Feature/Feature";
import TrendingProduct from "../HomeComponent/TrendingProduct/TrendingProduct";
import DiscountItem from "../HomeComponent/DiscountItem/DiscountItem";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureProduct />
      <LatestProduct />
      <Offer />
      <Feature />
      <TrendingProduct />
      <DiscountItem />
    </>
  );
};

export default Home;
