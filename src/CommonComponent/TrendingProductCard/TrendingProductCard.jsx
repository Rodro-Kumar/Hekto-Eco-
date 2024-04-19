import React from "react";
import trending from "../../assets/trending1.png";

const TrendingProductCard = ({
  productImg,
  productTitle,
  price,
  discount,
  discountPrice,
}) => {
  return (
    <>
      <div className="p-3 bg-white shadow flex flex-col max-w-[270px] items-center justify-center cursor-pointer">
        <div>
          <div className="bg-[#F5F6F8] py-7 px-9 h-[244px] lg:h-[220px] xl:h-[244px]">
            <img src={productImg ? productImg : trending} alt={productImg} />
          </div>
          <div className="pt-4 flex items-center flex-col justify-between">
            <p className="text-base font-Lato font-bold text-[#151875] pb-1">
              {productTitle ? productTitle : "Cantilever chair"}
            </p>
            <div className="flex items-center gap-x-3">
              <p className="text-sm font-semibold font-Lato text-[#151875]">
                {price ? price : "$00.00"}
              </p>
              {discount ? (
                <span className="text-sm font-semibold font-Lato text-[#1518755b] line-through">
                  {discountPrice ? discountPrice : "$00.00"}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProductCard;
