import React, { useState } from "react";
import TopCategoriesCard from "../../CommonComponent/TopCategoriesCard/TopCategoriesCard";
import TopCategoriesData from "../../../TopCategoriesData/TopCategoriesData";
import Slider from "react-slick";
const TopCategories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px", display: "flex", columnGap: "10px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="dots2 bg-transparent border-2 border-[#FB2E86] w-3 h-3 rounded-full mt-10"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 736,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [productData, setproductData] = useState(TopCategoriesData);
  return (
    <>
      <div className="pt-20 pb-28 px-4 lg:px-0">
        <div className="container">
          <div>
            <h2 className="text-[#151875] font-JosfinSans font-bold text-4xl pb-14 text-center md:text-5xl">
              Top Categories
            </h2>
          </div>

          <Slider {...settings}>
            {productData.map((item) => (
              <TopCategoriesCard
                key={item.id}
                productImg={item.ImG}
                title={item.title}
                price={item.price}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopCategories;
