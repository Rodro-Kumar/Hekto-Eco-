import React from "react";
import BreadCrumb from "../../CommonComponent/BreadCrumb/BreadCrumb";
import { useSelector } from "react-redux";

const Banner = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] py-24 px-4 lg:px-0">
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
