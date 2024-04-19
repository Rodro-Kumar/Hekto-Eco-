import React, { useState } from "react";
import LatestProductCard from "../../CommonComponent/LatestProductCard/LatestProductCard";
import latestProductData from "../../../LatestProductData/LatestProduct";

const LatestProduct = () => {
  const [productData, setproductData] = useState(latestProductData);
  return (
    <>
      <div className="pb-14 px-4 xl:px-0">
        <div className="container">
          <div>
            <h2 className="text-[#151875] text-4xl sm:text-5xl text-center pb-5 font-bold font-JosfinSans">
              Leatest Products
            </h2>
            <div className="catalog flex items-center pt-5 pb-14 gap-x-14 justify-center text-[#151875] font-Lato font-medium text-lg flex-wrap sm:flex-nowrap gap-y-4 sm:gap-y-0">
              <a href="#" className="relative">
                New Arrival
              </a>
              <a href="#" className="relative">
                Best Seller
              </a>
              <a href="#" className="relative">
                Featured
              </a>
              <a href="#" className="relative">
                Special Offer
              </a>
            </div>
          </div>
          <div className="flex items-center flex-wrap w-full gap-y-28 justify-center md:justify-between">
            {productData.map((item) => (
              <LatestProductCard
                key={item.id}
                productImg={item.productImg}
                status={item.productStatus}
                title={item.productTitle}
                price={item.productPrice}
                discount={item.productdiscount}
                discoutPrice={item.discountPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
