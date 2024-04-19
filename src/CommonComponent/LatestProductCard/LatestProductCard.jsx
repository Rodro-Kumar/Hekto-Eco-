import React from "react";
import latest1 from "../../assets/latest1.png";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import saleTag from "../../assets/saleTag.png";

const LatestProductCard = ({
  productImg,
  status,
  title,
  discount,
  price,
  discoutPrice,
}) => {
  return (
    <>
      <div className="group relative w-[280px] sm:w-[300px] md:w-[328px] lg:w-[305px] xl:w-[360px] h-[306px] cursor-pointer">
        {status ? (
          <div className="absolute top-6 left-4 z-10">
            <picture>
              <img src={saleTag} alt={saleTag} />
              <p className="absolute top-[21px] left-[26px] rotate-[-15deg] text-sm font-JosfinSans font-semibold text-white">
                sale
              </p>
            </picture>
          </div>
        ) : null}

        <div className="relative">
          <div className="bg-[#F7F7F7] w-full h-[270px] justify-center flex items-center group-hover:bg-white transition-all">
            <img src={productImg ? productImg : latest1} alt={productImg} />
          </div>
          <div className="hidden group-hover:block">
            <div className="flex items-center flex-col absolute bottom-9 left-4 gap-y-4">
              <span className="text-[#2F1AC4] h-8 w-8 bg-transparent rounded-full text-xl flex items-center justify-center hover:bg-[#EEEFFB] transition-all cursor-pointer">
                <BsCart2 />
              </span>
              <span className="text-[#2F1AC4] h-8 w-8 bg-transparent rounded-full text-xl flex items-center justify-center hover:bg-[#EEEFFB] transition-all cursor-pointer">
                <FaRegHeart />
              </span>
              <span className="text-[#2F1AC4] h-8 w-8 bg-transparent rounded-full text-xl flex items-center justify-center hover:bg-[#EEEFFB] transition-all cursor-pointer">
                <FaSearchPlus />
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between">
          <div>
            <h3 className="text-[#151875] font-JosfinSans font-normal">
              {title ? title : "Comfort Handy Craft"}
            </h3>
            <div className="max-w-[154px] h-[2px] bg-[#EEEFFB]"></div>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-[#151875] font-JosfinSans text-sm font-normal">
              {price ? price : "$42.00"}
            </p>
            {discount ? (
              <span className="line-through text-[#FB2448] text-xs font-JosfinSans font-normal">
                {discoutPrice ? discoutPrice : "$45.00"}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProductCard;
