import React from "react";
import companyImg from "../../assets/company.png";

const Newsletter = () => {
  return (
    <>
      <div className="bg-[url('src/assets/newsletter.png')] bg-no-repeat sm:bg-cover pt-44 pb-24 mb-24 bg-center">
        <div className="container">
          <div className="flex flex-col items-center justify-center px-4 lg:px-0">
            <h2 className="text-3xl sm:text-4xl font-JosfinSans font-bold text-[#151875] pb-7 max-w-[574px] text-center leading-[50px]">
              Get Leatest Update By Subscribe 0ur Newslater
            </h2>
            <button className="text-white py-4 px-8 bg-[#FB2E86] text-base font-JosfinSans font-medium">
              <a href="#">Shop Now</a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={companyImg} alt={companyImg} />
      </div>
    </>
  );
};

export default Newsletter;
