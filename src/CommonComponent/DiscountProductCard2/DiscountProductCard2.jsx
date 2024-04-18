import React from "react";
import img from "../../assets/1.png";

const DiscountProductCard2 = ({ productImg, price, title }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <div className="bg-[#F5F6F8] h-[74px] w-[107px] flex items-center justify-center">
          <img src={productImg ? productImg : img} alt={productImg} />
        </div>
        <div>
          <h4 className="text-[#151875] font-JosfinSans text-base md:text-lg font-bold pb-1">
            {title ? title : "Title"}
          </h4>
          <span className="text-[#151875] font-Lato text-xs md:text-sm font-bold line-through">
            {price ? price : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default DiscountProductCard2;
