import React from "react";
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";
import offer4 from "../../assets/offer4.png";

const Offer = () => {
  return (
    <>
      <div className="pb-[135px] pt-5 px-4 lg:px-0">
        <div className="container">
          <div>
            <div>
              <h2 className="text-[#151875] font-bold font-JosfinSans text-3xl sm:text-5xl pb-14 text-center">
                What Shopex Offer!
              </h2>
            </div>
            <div className="flex items-center justify-between flex-col gap-y-10 sm:gap-y-0 sm:flex-row">
              <div className="pt-[74px] px-[26px] bg-white shadow-md h-[320px]">
                <div className="flex items-center flex-col">
                  <img src={offer1} alt={offer1} />
                  <h4 className="text-lg font-semibold font-JosfinSans text-[#151875] pt-7 pb-5">
                    24/7 Support
                  </h4>
                  <p className="max-w-[227px] text-base font-Lato font-bold text-[#1a0b5b62] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
              <div className="pt-14 pb-11 px-[26px] bg-white shadow-md h-[320px]">
                <div className="flex items-center flex-col">
                  <img src={offer2} alt={offer2} />
                  <h4 className="text-lg font-semibold font-JosfinSans text-[#151875] pt-7 pb-5">
                    24/7 Support
                  </h4>
                  <p className="max-w-[227px] text-base font-Lato font-bold text-[#1a0b5b62] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
              <div className="pt-14 pb-11 px-[26px] bg-white shadow-md h-[320px]">
                <div className="flex items-center flex-col">
                  <img src={offer3} alt={offer3} />
                  <h4 className="text-lg font-semibold font-JosfinSans text-[#151875] pt-7 pb-5">
                    24/7 Support
                  </h4>
                  <p className="max-w-[227px] text-base font-Lato font-bold text-[#1a0b5b62] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
              <div className="pt-14 pb-11 px-[26px] bg-white shadow-md h-[320px]">
                <div className="flex items-center flex-col">
                  <img src={offer4} alt={offer4} />
                  <h4 className="text-lg font-semibold font-JosfinSans text-[#151875] pt-7 pb-5">
                    24/7 Support
                  </h4>
                  <p className="max-w-[227px] text-base font-Lato font-bold text-[#1a0b5b62] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
