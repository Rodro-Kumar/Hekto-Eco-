import React from "react";
import BreadCrumb from "../../CommonComponent/BreadCrumb/BreadCrumb";

const Banner = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] py-24">
        <div className="container">
          <div>
            <h1 className="text-4xl font-JosfinSans font-bold text-[#101750] pb-2">
              Shop Grid Default
            </h1>
            <BreadCrumb />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
