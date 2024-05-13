import React from "react";
import { IoIosCart } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ShopProductCard = ({
  productImg,
  productTitle,
  mainPrice,
  discount,
  discountStatus,
  className,
  listlayout,
  productDes,
  rating,
}) => {
  const starRating = Array.from({ length: 5 }, (x, index) => {
    let number = index + 0.5;
    return (
      <span>
        {rating >= index + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaStar className="text-[#b8b8b8]" />
        )}
      </span>
    );
  });

  return (
    <>
      <div
        className={`shopProductcard w-[162px]  h-[258px] md:h-[363px] cursor-pointer group ${className}`}
      >
        <div className="relative overflow-hidden">
          <div
            className={`bg-[#F6F7FB] h-[166px] md:h-[280px] group-hover:bg-[#EBF4F3] flex items-center justify-center ${
              listlayout && "w-[315px]"
            }`}
          >
            <img
              src={productImg ? productImg : null}
              alt={productImg}
              className="w-full h-full"
            />
          </div>
          <div
            className={`absolute bottom-6 transition-all -left-14 flex-col gap-y-3 group-hover:left-3 duration-700 bg-red-300 py-2 px-2 ${
              listlayout ? "hidden" : "flex"
            }`}
          >
            <div className="h-[30px] w-[30px] transition-all cursor-pointer rounded-full flex items-center justify-center text-[#151875] text-xl hover:bg-[#fff] hover:scale-105">
              <IoIosCart />
            </div>
            <div className="h-[30px] w-[30px] transition-all cursor-pointer rounded-full flex items-center justify-center text-[#151875] text-xl hover:bg-[#fff] hover:scale-105">
              <FaSearchengin />
            </div>
            <div className="h-[30px] w-[30px] transition-all cursor-pointer rounded-full flex items-center justify-center text-[#151875] text-xl hover:bg-[#fff] hover:scale-105">
              <CiHeart />
            </div>
          </div>
        </div>

        <div
          className={`pt-3 flex flex-col justify-center ${
            listlayout ? "items-start gap-y-2" : "items-center"
          }`}
        >
          <div className="flex items-center gap-x-3">
            <h4
              className={`text-lg font-JosfinSans font-bold text-[#151875]  text-ellipsis whitespace-nowrap overflow-hidden text-center w-full ${
                listlayout ? "text-start pb-0" : "pb-2"
              }`}
            >
              {productTitle ? productTitle : "Vel elit euismod "}
            </h4>
            <div
              className={`items-center gap-x-[6px] ${
                listlayout ? "flex" : "hidden"
              }`}
            >
              <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
            </div>
          </div>

          <div
            className={`items-center gap-x-[20px] pt-2 ${
              listlayout ? "flex" : "hidden"
            }`}
          >
            <div className="flex gap-x-2">
              <span className="text-[#151875] text-sm font-JosfinSans font-normal">
                ${mainPrice ? mainPrice : "$00.00"}
              </span>
              {discountStatus && (
                <span className="text-[#FB2E86] text-sm font-JosfinSans font-normal line-through">
                  {discount ? discount : "$00.00"}
                </span>
              )}
            </div>
            <div className="flex items-center text-yellow-500 gap-x-1">
              {starRating}
            </div>
          </div>

          {listlayout && (
            <h2 className="font-Lato font-medium text-[#151875] text-base w-[592px]">
              {productDes ? productDes : null}
            </h2>
          )}

          <div
            className={`items-center gap-x-[6px] ${
              listlayout ? "hidden" : "flex"
            }`}
          >
            <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
          </div>
          <div
            className={`items-center gap-x-[10px] pt-3 ${
              listlayout ? "hidden" : "flex"
            }`}
          >
            <span className="text-[#151875] text-sm font-JosfinSans font-normal">
              {mainPrice ? mainPrice : "$00.00"}
            </span>
            {discountStatus && (
              <span className="text-[#FB2E86] text-sm font-JosfinSans font-normal line-through">
                {discount ? discount : "$00.00"}
              </span>
            )}
          </div>
          <div
            className={`transition-all gap-x-6 group-hover:left-3 duration-700 py-2 px-2 ${
              listlayout ? "flex" : "hidden"
            }`}
          >
            <div className="h-[30px] w-[30px] transition-all cursor-pointer rounded-full flex items-center justify-center text-[#151875] text-xl hover:bg-[#fff] shadow-md active:border-2 active:border-[#151875] active:shadow-lg">
              <IoIosCart />
            </div>
            <div className="h-[30px] w-[30px] transition-all cursor-pointer rounded-full flex items-center justify-center text-[#151875] text-xl hover:bg-[#fff] shadow-md active:border-2 active:border-[#151875] active:shadow-lg">
              <FaSearchengin />
            </div>
            <div className="h-[30px] w-[30px] transition-all cursor-pointer rounded-full flex items-center justify-center text-[#151875] text-xl hover:bg-[#fff] shadow-md active:border-2 active:border-[#151875] active:shadow-lg">
              <CiHeart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProductCard;
