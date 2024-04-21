import React, { useState } from "react";
import WoodChair from "../../CommonComponent/WoodChair/WoodChair";
import { Link } from "react-router-dom";

const DiscountItem = () => {
  return (
    <>
      <div className="pb-20 px-4 xl:px-0">
        <div className="container">
          <div>
            <h2 className="text-[#151875] font-JosfinSans font-bold text-4xl sm:text-5xl pb-8 text-center">
              Discount Item
            </h2>
            <div className="item flex items-center justify-center gap-x-5 text-[#151875] font-Lato font-normal text-base max-[345px]:text-sm sm:text-lg">
              <Link>Wood Chair</Link>
              <Link>Plastic Chair</Link>
              <Link>Sofa Colletion</Link>
            </div>
            <div>
              <WoodChair />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountItem;
