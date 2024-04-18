import React from "react";
import img from "../../assets/top1.png";

const TopCategoriesCard = ({ productImg, title, price }) => {
  return (
    <>
      <div className="group w-[150px] lg:w-[269px] cursor-pointer ml-2">
        <div className="relative w-full h-[150px] lg:h-[269px] rounded-[100%] bg-[#F6F7FB] shadow-sm flex items-center justify-center">
          <img
            src={productImg ? productImg : img}
            alt={productImg}
            className="w-[100px] lg:w-[180px]"
          />
          <div className="w-full h-[150px] lg:h-[269px] bg-[#9877E7] rounded-[100%] absolute top-1 -left-[5px] -z-10 opacity-0 group-hover:opacity-[1] transition-all"></div>
          <div className="bg-[#08D15F] text-white font-JosfinSans text-[10px] sm:text-xs font-semibold py-2 px-[18px] rounded-md absolute bottom-[18px] hidden group-hover:block">
            <span>View Shop</span>
          </div>
        </div>

        <div className="pt-7 text-center">
          <h4 className="text-[#151875] text-lg md:text-xl font-JosfinSans font-medium pb-3">
            {title ? title : "Product Title"}
          </h4>
          <span className="text-[#151875] text-sm sm:text-base font-JosfinSans font-medium">
            {price ? price : "$00.00"}
          </span>
        </div>
      </div>
    </>
  );
};

export default TopCategoriesCard;
