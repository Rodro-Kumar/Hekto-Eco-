import React from "react";
import FeatureProductCard from "../../CommonComponent/FeatureProductCard/FeatureProductCard";

const FeatureProduct = () => {
  return (
    <>
      <div className="pt-32 pb-[70px]">
        <div className="container">
          <div className="py-10">
            <h1 className="text-[#1A0B5B] font-JosfinSans text-5xl font-bold text-center pb-12">
              Featured Products
            </h1>
          </div>
          <div className="flex items-center gap-x-7">
            <FeatureProductCard />
            <FeatureProductCard />
            <FeatureProductCard />
            <FeatureProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
