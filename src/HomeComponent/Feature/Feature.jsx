import React from "react";
import featureImg from "../../assets/feature.png";
const Feature = () => {
  return (
    <>
      <div id="feature" className="bg-[#F1F0FF] mb-32 py-4 px-4 lg:px-0 ">
        <div className="container">
          <div className="flex justify-center items-center flex-col sm:flex-row">
            <div>
              <img src={featureImg} alt={featureImg} />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-JosfinSans font-bold text-[#151875] pb-7 max-w-[507px]">
                Unique Features Of leatest & Trending Poducts
              </h3>
              <div className="flex flex-col gap-y-3 pb-9">
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#F52B70] h-3 w-3 rounded-full hidden sm:block"></div>
                  <p className="text-base font-Lato font-medium text-[#ACABC3] leading-none">
                    All frames constructed with hardwood solids and laminates
                  </p>
                </div>{" "}
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#2B2BF5] h-3 w-3 rounded-full mt-[-28px]  hidden sm:block"></div>
                  <p className="text-base font-Lato font-medium text-[#ACABC3] leading-4 sm:leading-7 max-w-[461px]">
                    Reinforced with double wood dowels, glue, screw - nails
                    corner blocks and machine nails
                  </p>
                </div>{" "}
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#2BF5CC] h-3 w-3 rounded-full  hidden sm:block"></div>
                  <p className="text-base font-Lato font-medium text-[#ACABC3] leading-none">
                    Arms, backs and seats are structurally reinforced
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-[18px]">
                <div>
                  <button className="text-base font-semibold font-JosfinSans text-white bg-[#FB2E86] py-3 px-6">
                    Add To Cart
                  </button>
                </div>
                <div>
                  <p className="text-sm font-JosfinSans font-semibold text-[#151875]">
                    B&B Italian Sofa
                  </p>
                  <span className="text-sm font-JosfinSans font-normal text-[#151875] ">
                    $32.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
