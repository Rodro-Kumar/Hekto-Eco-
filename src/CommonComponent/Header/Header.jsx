import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import Logo from "../../assets/Hekto.png";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const HandleMenu = () => {
    setmenuOpen(!menuOpen);
  };
  return (
    <>
      {/* ============== Top ============ */}
      <div className="bg-[#7E33E0] py-[14px] text-[#F1F1F1]">
        <div className="container">
          <div className="flex items-center justify-between px-4 xl:px-0">
            <div className="hidden md:block">
              <div className="flex items-center gap-x-12 md:gap-x-6 lg:gap-x-12">
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
            <div className="flex items-center justify-between w-full md:justify-end md:gap-x-4 lg:gap-x-7">
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
      {/* ============= Bottom =========== */}
      <div className="py-4 header px-4 xl:px-0">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-[88px] md:gap-x-[25px] lg:gap-x-[88px]">
              <div>
                <a href="#">
                  <picture>
                    <img src={Logo} alt={Logo} className="md:w-[60px]" />
                  </picture>
                </a>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center gap-x-8 md:gap-x-4 lg:gap-x-8">
                  <div className="group relative">
                    <li className="group flex items-center gap-x-1 cursor-pointer">
                      <a
                        href="#"
                        data-link-alt="Home"
                        className="group font-Lato font-normal text-base leading-none focus:text-[#FB2E86] group-hover:text-[#FB2E86]"
                      >
                        <span>Home</span>
                      </a>
                      <IoIosArrowDown className="group-hover:text-[#FB2E86]" />
                    </li>
                  </div>

                  <div>
                    <li>
                      <a
                        href="#"
                        data-link-alt="Pages"
                        className="text-[#000] font-Lato font-normal text-base leading-none focus:text-[#FB2E86]"
                      >
                        <span>Pages</span>
                      </a>
                    </li>
                  </div>

                  <li>
                    <a
                      href="#"
                      data-link-alt="Products"
                      className="text-[#000] font-Lato font-normal text-base leading-none focus:text-[#FB2E86]"
                    >
                      <span>Products</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-link-alt="Blog"
                      className="text-[#000] font-Lato font-normal text-base leading-none focus:text-[#FB2E86]"
                    >
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-link-alt="Shop"
                      className="text-[#000] font-Lato font-normal text-base leading-none focus:text-[#FB2E86]"
                    >
                      <span>Shop</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-link-alt="Contact"
                      className="text-[#000] font-Lato font-normal text-base leading-none focus:text-[#FB2E86]"
                    >
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* =================== */}
            {menuOpen && (
              <motion.div
                initial={{ top: "-100vh" }}
                animate={{ top: "40px" }}
                transition={{
                  ease: [0.61, 1, 0.88, 1],
                  duration: 0.5,
                }}
                className={
                  "flex flex-col absolute items-center bg-[#7E33E0] top-10 z-[999] w-full left-1/2 -translate-x-1/2 py-5"
                }
              >
                <div>
                  <div
                    className="absolute right-4 text-white text-2xl cursor-pointer"
                    onClick={() => setmenuOpen(false)}
                  >
                    <RxCross2 />
                  </div>

                  <ul className="flex items-center flex-col gap-y-6">
                    <li className="flex items-center gap-x-1">
                      <a
                        href="#"
                        data-link-alt="Home"
                        className="text-[#FB2E86] font-Lato font-normal text-base leading-none block"
                      >
                        <span>Home</span>
                      </a>
                      <IoIosArrowDown className="text-[#FB2E86]" />
                    </li>
                    <li>
                      <a
                        href="#"
                        data-link-alt="Pages"
                        className="text-[#fff] font-Lato font-normal text-base leading-none block"
                      >
                        <span>Pages</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-link-alt="Products"
                        className="text-[#fff] font-Lato font-normal text-base leading-none block"
                      >
                        <span>Products</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-link-alt="Blog"
                        className="text-[#fff] font-Lato font-normal text-base leading-none block"
                      >
                        <span>Blog</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-link-alt="Shop"
                        className="text-[#fff] font-Lato font-normal text-base leading-none block"
                      >
                        <span>Shop</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-link-alt="Contact"
                        className="text-[#fff] font-Lato font-normal text-base leading-none block"
                      >
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center h-[40px] mt-4">
                  <input
                    type="text"
                    className="max-w-[266px] h-full bg-[#D9D9D9] pl-2"
                  />
                  <div className="bg-[#FB2E86] text-white h-full py-[10px] px-3 text-3xl flex items-center justify-center">
                    <CiSearch />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ================ */}

            <div className="hidden md:block md:ml-3 lg:ml-0">
              <div className="flex items-center h-[40px]">
                <input
                  type="text"
                  className="max-w-[266px] md:w-[180px] lg:w-[266px] h-full bg-[#D9D9D9] pl-2"
                />
                <div className="bg-[#FB2E86] text-white h-full py-[10px] px-3 text-3xl flex items-center justify-center">
                  <CiSearch />
                </div>
              </div>
            </div>
            <div
              className="md:hidden cursor-pointer text-2xl"
              onClick={HandleMenu}
            >
              <HiOutlineMenuAlt4 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
