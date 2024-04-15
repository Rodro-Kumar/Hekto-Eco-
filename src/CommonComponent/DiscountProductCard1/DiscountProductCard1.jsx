import React from "react";
import discountImg from "../../assets/discount1.png";

const DiscountProductCard1 = ({ title, tag, img, tagTitle }) => {
  return (
    <>
      <div className="pt-9 pl-6 bg-[#FFF6FB] w-[420px] h-[270px]">
        <div>
          <h4 className="text-[#151875] font-JosfinSans font-semibold text-[26px] pb-3">
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
        <div className="flex justify-end">
          <img src={img ? img : discountImg} alt={img} />
        </div>
      </div>
    </>
  );
};

export default DiscountProductCard1;
