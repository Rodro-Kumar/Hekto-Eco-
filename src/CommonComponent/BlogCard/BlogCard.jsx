import React from "react";
import img from "../../assets/Blog1.png";
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogCard = ({ blogImg, writter, title }) => {
  return (
    <>
      <div className="group max-w-[370px] sm:w-[200px] md:w-[226px] lg:w-[370px] shadow pb-9 rounded-md cursor-pointer">
        <div className="w-full h-[255px] sm:h-[139px] lg:h-[255px] rounded-lg overflow-hidden mb-7">
          <img src={blogImg ? blogImg : img} alt={blogImg} />
        </div>
        <div className="pl-5">
          <div className="flex items-center flex-row sm:flex-col lg:flex-row gap-y-2 lg:gap-y-0 gap-x-7">
            <div className="flex items-center gap-x-1">
              <div>
                <FaPenNib className="text-[#FB2E86]" />
              </div>
              <div>
                <p className="text-[#151875] font-JosfinSans font-normal text-sm">
                  {writter ? writter : "SaberAli"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <div>
                <FaRegCalendarAlt className="text-[#FFA454]" />
              </div>
              <div>
                <p className="text-[#151875] font-JosfinSans font-normal text-sm">
                  21 August,2020
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 md:pt-4 lg:pt-8">
            <h4 className="text-[#151875] font-JosfinSans font-bold text-base lg:text-lg pb-4 transition-all group-hover:text-[#FB2E86]">
              {title ? title : "Top esssential Trends in 2021"}
            </h4>
            <p className="text-[#72718F] font-Lato font-normal text-sm lg:text-base pb-[14px]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a
              href="#"
              className="text-[#151875] font-normal text-base font-Lato underline transition-all group-hover:text-[#FB2E86]"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
