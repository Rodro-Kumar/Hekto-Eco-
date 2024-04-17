import React from "react";
import Header from "../CommonComponent/Header/Header";
import Hero from "../HomeComponent/Hero/Hero";
import FeatureProduct from "../HomeComponent/FeatureProduct/FeatureProduct";
import LatestProduct from "../HomeComponent/LatestProduct/LatestProduct";
import Offer from "../HomeComponent/Offer/Offer";
import Feature from "../HomeComponent/Feature/Feature";
import TrendingProduct from "../HomeComponent/TrendingProduct/TrendingProduct";
import DiscountItem from "../HomeComponent/DiscountItem/DiscountItem";
import TopCategories from "../HomeComponent/TopCategories/TopCategories";
import Newsletter from "../HomeComponent/Newsletter/Newsletter";
import Blog from "../HomeComponent/Blog/Blog";

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
      <TopCategories />
      <Newsletter />
      <Blog />
    </>
  );
};

export default Home;
