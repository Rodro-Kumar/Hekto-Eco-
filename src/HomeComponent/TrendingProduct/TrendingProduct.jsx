import React, { useState } from "react";
import TrendingProductCard from "../../CommonComponent/TrendingProductCard/TrendingProductCard";
import TrendingProductData from "../../../TrendingProductData/TrendingProductData";
import DiscountProductCard1 from "../../CommonComponent/DiscountProductCard1/DiscountProductCard1";
import DiscountProdcutData from "../../../DiscountOfferData/DiscountOfferData";
import DiscountProductCard2 from "../../CommonComponent/DiscountProductCard2/DiscountProductCard2";
import discountData2 from "../../../DiscountProductData2/DiscountProductData2";

const TrendingProduct = () => {
  const [productData, setproductData] = useState(TrendingProductData);
  const [discountData, setdiscountData] = useState(DiscountProdcutData);
  return (
    <>
      <div className="pb-32 px-4 lg:px-0">
        <div className="container">
          <div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-JosfinSans font-bold text-[#151875] pb-10 text-center">
                Trending Products
              </h3>
            </div>
            <div className="flex items-center justify-between flex-col sm:flex-row gap-y-10 sm:gap-y-0">
              {TrendingProductData.map((item) => {
                return (
                  <TrendingProductCard
                    key={item.id}
                    productImg={item.productImg}
                    productTitle={item.productTitle}
                    price={item.mainPrice}
                    discount={item.discount}
                    discountPrice={item.discountPrice}
                  />
                );
              })}
            </div>
            <div className="pt-10 flex gap-x-6 flex-col sm:flex-row gap-y-4 sm:gap-y-0">
              <div className="flex items-center gap-x-7 flex-col md:flex-row gap-y-4 sm:gap-y-0">
                {discountData.map((item) => (
                  <DiscountProductCard1
                    className={"relative"}
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    tag={item.tag}
                    tagTitle={item.tagTitle}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-between gap-y-4 sm:gap-y-0">
                {discountData2.map((item) => (
                  <DiscountProductCard2
                    key={item.id}
                    productImg={item.img}
                    title={item.title}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;
