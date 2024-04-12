import React from "react";
import furnitureImg from "../../assets/featureProduct_1.png";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";

const FeatureProductCard = ({ productImg }) => {
  return (
    <>
      <div className="group shadow-md w-1/4 cursor-pointer relative">
        <div className="bg-[#F6F7FB] pt-11 pb-3 flex items-center justify-center">
          <picture>
            <img
              src={productImg ? productImg : furnitureImg}
              alt={productImg}
            />
          </picture>
        </div>

        <div className="flex flex-col items-center py-4 group-hover:bg-[#2F1AC4] transition-all relative">
          <div className="bg-[#08D15F] py-2 px-3 rounded-sm text-white font-JosfinSans font-medium text-xs  left-1/2 -translate-x-1/2 absolute top-[-38px] hidden group-hover:block transition-all">
            <p>View Details</p>
          </div>
          <h2 className="text-lg font-Lato font-bold text-[#FB2E86] group-hover:text-white">
            Cantilever chair
          </h2>
          <div className="flex items-center gap-x-1 pt-3">
            <div className="w-[14px] h-1 bg-[#05E6B7] rounded-full"></div>
            <div className="w-[14px] h-1 bg-[#F701A8] rounded-full"></div>
            <div className="w-[14px] h-1 bg-[#00009D] rounded-full group-hover:bg-[#FFEAC1]"></div>
          </div>
          <p className="text-[#151875] font-JosfinSans font-normal text-sm py-3 group-hover:text-white">
            Code - Y523201
          </p>
          <h5 className="text-[#151875] font-JosfinSans font-normal text-sm group-hover:text-white">
            $42.00
          </h5>
        </div>
        <div className="hidden group-hover:block">
          <div className="flex items-center absolute top-3 left-3 gap-x-4">
            <span className="text-[#1389FF] h-8 w-8 bg-transparent rounded-full text-xl flex items-center justify-center hover:bg-[#EEEFFB] hover:text-[#2F1AC4] transition-all cursor-pointer">
              <BsCart2 />
            </span>
            <span className="text-[#1389FF] h-8 w-8 bg-transparent rounded-full text-xl flex items-center justify-center hover:bg-[#EEEFFB] hover:text-[#2F1AC4] transition-all cursor-pointer">
              <FaRegHeart />
            </span>
            <span className="text-[#1389FF] h-8 w-8 bg-transparent rounded-full text-xl flex items-center justify-center hover:bg-[#EEEFFB] hover:text-[#2F1AC4] transition-all cursor-pointer">
              <FaSearchPlus />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProductCard;
