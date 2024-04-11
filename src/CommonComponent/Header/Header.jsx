import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  return (
    <>
      {/* ============== Top ============ */}
      <div className="bg-[#7E33E0] py-[14px] text-[#F1F1F1]">
        <div className="container">
          <div className="flex items-center justify-between px-4 lg:px-0">
            <div className="hidden md:block">
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
            </div>

            <div className="flex items-center justify-between w-full md:justify-end md:gap-x-7">
              <div className="text-sm sm:text-base font-JosfinSans font-semibold flex items-center gap-x-1 cursor-pointer max-[340px]:gap-x-0 max-[310px]:text-xs">
                <p>English</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="text-sm sm:text-base font-JosfinSans font-semibold flex items-center gap-x-1 cursor-pointer max-[340px]:gap-x-0 max-[310px]:text-xs">
                <p>USD</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="text-sm sm:text-base font-JosfinSans font-semibold flex items-center gap-x-1 cursor-pointer max-[340px]:gap-x-0 max-[310px]:text-xs">
                <p>Login</p>
                <span>
                  <LuUser />
                </span>
              </div>
              <div className="text-sm sm:text-base font-JosfinSans font-semibold flex items-center gap-x-1 cursor-pointer max-[340px]:gap-x-0 max-[310px]:text-xs">
                <p>Wishlist</p>
                <span>
                  <FaRegHeart />
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-xl cursor-pointer sm:text-2xl max-[310px]:text-lg">
                  <CgShoppingCart />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
