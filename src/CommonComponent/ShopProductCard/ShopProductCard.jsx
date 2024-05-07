import React from "react";
import { IoIosCart } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const ShopProductCard = ({ productImg }) => {
  return (
    <>
      <div className="w-[270px] h-[363px] cursor-pointer group">
        <div className="relative overflow-hidden">
          <div className="bg-[#F6F7FB] h-[280px] group-hover:bg-[#EBF4F3] flex items-center justify-center">
            <img
              src={productImg ? productImg : null}
              alt={productImg}
              className="w-full h-full"
            />
          </div>
          <div className="absolute bottom-6 transition-all -left-14 flex flex-col gap-y-3 group-hover:left-3 duration-700 bg-red-300 py-2 px-2">
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

        <div className="pt-3 flex flex-col items-center justify-center">
          <h4 className="text-lg font-JosfinSans font-bold text-[#151875] pb-2">
            Vel elit euismod
          </h4>
          <div className="flex items-center gap-x-[6px]">
            <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
          </div>
          <div className="flex items-center gap-x-[10px] pt-3">
            <span className="text-[#151875] text-sm font-JosfinSans font-normal">
              $26.00{" "}
            </span>
            <span className="text-[#FB2E86] text-sm font-JosfinSans font-normal">
              $42.00{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProductCard;
