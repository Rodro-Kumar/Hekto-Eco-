import React, { useState } from "react";
import FeatureProductCard from "../../CommonComponent/FeatureProductCard/FeatureProductCard";
import FeatureProductData from "../../../FeatureProductData/FeatureProductData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const FeatureProduct = () => {
  // Slider setting
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{}}>
        <ul
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            columnGap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="dots w-[6px] h-[6px] bg-[#FEBAD7] rounded-full transition-all sm:w-5"></div>
    ),
  };
  const [productData, setproductData] = useState(FeatureProductData);

  return (
    <>
      <div className="pt-32 pb-[70px] px-4 lg:px-0">
        <div className="container">
          <div className="py-10">
            <h1 className="text-[#1A0B5B] font-JosfinSans text-4xl sm:text-5xl font-bold text-center pb-12">
              Featured Products
            </h1>
          </div>
          <Slider {...settings}>
            {productData.map((item) => (
              <div key={item.id}>
                <FeatureProductCard
                  key={item.id}
                  productImg={item.img}
                  productTitle={item.title}
                  productCode={item.code}
                  price={item.price}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
