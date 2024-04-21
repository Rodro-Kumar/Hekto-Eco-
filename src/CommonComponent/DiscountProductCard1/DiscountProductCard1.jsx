import React from "react";
import discountImg from "../../assets/discount1.png";

const DiscountProductCard1 = ({ className, title, tag, img, tagTitle }) => {
  return (
    <>
      <div
        className={`pt-9 pl-6 bg-[#FFF6FB] w-[326px] max-[334px]:w-[300px] sm:w-[420px] h-[270px] text-center sm:text-start ${className}`}
      >
        <div>
          <h4 className="text-[#151875] font-JosfinSans font-semibold text-[26px] pb-3 max-[315px]:text-[20px]">
            {title ? title : "23% off in all products"}
          </h4>
          {tag ? (
            <a
              href="#"
              className="text-[#FB2E86] font-Lato font-semibold text-base relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FB2E86]"
            >
              {tagTitle ? tagTitle : null}
            </a>
          ) : null}
        </div>
        <div className="flex justify-end absolute right-10 sm:right-0 top-[70px]">
          <img src={img ? img : discountImg} alt={img} />
        </div>
      </div>
    </>
  );
};

export default DiscountProductCard1;
