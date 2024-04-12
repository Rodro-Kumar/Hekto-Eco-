import React from "react";
import sofa from "../../assets/sofa_hero.png";
import lamp from "../../assets/lamp.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[#f2f0ff] overflow-hidden">
        <div className="container">
          <div className="py-10 flex items-center relative flex-col md:flex-row px-4 lg:px-0">
            <div className="absolute left-[-200px] top-0">
              <img src={lamp} alt={lamp} />
            </div>
            <div>
              <p className="text-base font-Lato text-[#fb2e86] font-bold pb-6 md:pb-6">
                Best Furniture For Your Castle....
              </p>
              <div className="block md:hidden">
                <picture>
                  <img src={sofa} alt={sofa} />
                </picture>
              </div>
              <h1 className="md:text-[52px] font-bold font-JosfinSans text-black pb-3 text-[40px] pt-10 md:pt-0">
                New Furniture Collection Trends in 2020
              </h1>
              <p className="text-base font-Lato font-bold text-[#8A8FB9] pb-6 max-w-[559px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="bg-[#fb2e86] py-4 px-10 text-white font-JosfinSans text-base font-semibold hover:bg-[#ff006f] transition-all">
                Shop Now
              </button>
            </div>
            <div className="hidden md:block">
              <picture>
                <img src={sofa} alt={sofa} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
