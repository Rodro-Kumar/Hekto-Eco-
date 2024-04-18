import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import img from "../../assets/woodchair.png";

const WoodChair = () => {
  return (
    <>
      <div
        id="woodchair"
        className="flex items-center justify-between flex-col lg:flex-row overflow-hidden"
      >
        <div>
          <h3 className="text-[#151875] font-JosfinSans font-bold text-3xl sm:text-4xl pt-10 lg:pt-0 pb-4 sm:pb-0 lg:pb-4">
            20% Discount Of All Products
          </h3>
          <div className="block lg:hidden mb-5 sm:w-[465px]">
            <img src={img} alt={img} />
          </div>
          <span className="text-[#FB2E86] font-JosfinSans font-normal text-xl">
            Eams Sofa Compact
          </span>
          <p className="text-[#B7BACB] font-Lato font-normal text-sm sm:text-base max-w-[523px] pb-7 pt-5 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="flex items-start sm:items-center gap-x-12 flex-col sm:flex-row">
            <div className="flex flex-col gap-y-0 sm:gap-y-2">
              <div className="flex items-center gap-x-5">
                <IoMdCheckmark className="text-[#7569B2]" />
                <p className="text-base font-Lato font-normal text-[#B8B8DC]">
                  Material expose like metals
                </p>
              </div>
              <div className="flex items-center gap-x-5">
                <IoMdCheckmark className="text-[#7569B2]" />
                <p className="text-base font-Lato font-normal text-[#B8B8DC]">
                  Material expose like metals
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-0 sm:gap-y-2">
              <div className="flex items-center gap-x-5">
                <IoMdCheckmark className="text-[#7569B2]" />
                <p className="text-base font-Lato font-normal text-[#B8B8DC]">
                  Material expose like metals
                </p>
              </div>
              <div className="flex items-center gap-x-5">
                <IoMdCheckmark className="text-[#7569B2]" />
                <p className="text-base font-Lato font-normal text-[#B8B8DC]">
                  Material expose like metals
                </p>
              </div>
            </div>
          </div>
          <button className="text-base font-JosfinSans font-normal text-white py-3 sm:py-5 sm:px-12 px-8 bg-[#FB2E86] mt-9">
            Shop Now
          </button>
        </div>
        <div className="hidden lg:block">
          <img src={img} alt={img} />
        </div>
      </div>
    </>
  );
};

export default WoodChair;
