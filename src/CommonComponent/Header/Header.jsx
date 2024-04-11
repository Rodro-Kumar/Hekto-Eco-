import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const Header = () => {
  return (
    <>
      {/* ============== Top ============ */}
      <div className="bg-[#7E33E0] py-[14px] text-[#F1F1F1]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-12">
              <div className="flex items-center gap-x-3">
                <span>
                  <MdOutlineMailOutline className="text-lg" />
                </span>
                <a
                  href="mailto:mhhasanul@gmail.com"
                  className="text-base font-JosfinSans font-semibold"
                >
                  mhhasanul@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-x-3">
                <span>
                  <BiPhoneCall className="text-lg" />
                </span>
                <a
                  href="tel:+4733378901"
                  className="text-base font-JosfinSans font-semibold"
                >
                  (12345)67890
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
