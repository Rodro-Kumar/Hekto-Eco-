import React from "react";
import Logo from "../../assets/Hekto.png";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="bg-[#EEEFFB] py-24 px-4 xl:px-0">
        <div className="container">
          <div className="flex justify-between items-center md:items-start lg:items-center lg:gap-x-24 flex-col lg:flex-row">
            <div>
              <img src={Logo} alt={Logo} />
              <div className="relative inline-block mt-8 mb-6">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="bg-white rounded pl-5 pr-36 py-4 max-[340px]:pr-28"
                />
                <button className="text-base font-medium text-white py-2 max-[340px]:px-6 px-10 bg-[#FB2E86] rounded absolute top-1/2 -translate-y-1/2 right-2">
                  Sign Up
                </button>
              </div>
              <p className="text-[#8A8FB9] font-Lato text-[13px] sm:text-sm pb-2">
                Contact Info
              </p>
              <h4 className="text-[#8A8FB9] font-Lato text-[13px] sm:text-sm">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </h4>
            </div>
            <div className="mt-8 flex justify-between w-full flex-wrap sm:flex-nowrap md:gap-x-28 gap-y-8 md:gap-y-0">
              <ul>
                <li className="text-black font-Lato text-base sm:text-xl font-bold pb-5">
                  Catagories
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Laptops & Computers</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Cameras & Photography</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Smart Phones & Tablets</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Video Games & Consoles</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Waterproof Headphones</a>
                </li>
              </ul>
              <ul>
                <li className="text-black font-Lato text-base sm:text-xl font-bold pb-5">
                  Customer Care
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">My Account</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Discount</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Returns</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Orders History</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Order Tracking</a>
                </li>
              </ul>
              <ul>
                <li className="text-black font-Lato text-base sm:text-xl font-bold pb-5">
                  Pages
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Blog</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Browse the Shop</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Category</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Pre-Built Pages</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">Visual Composer Elements</a>
                </li>
                <li className="text-[#8A8FB9] font-Lato text-sm sm:text-base font-medium pt-5">
                  <a href="#">WooCommerce Pages</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 bg-[#E7E4F8] px-4 xl:px-0">
        <div className="container">
          <div className="flex items-center justify-between flex-col sm:flex-row gap-y-2 sm:gap-y-0">
            <div>
              <span className="text-[#9DA0AE] font-semibold font-Lato text-base">
                ©Webecy - All Rights Reserved
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-8 h-8 rounded-full bg-[#151875] text-white flex items-center justify-center transition-all cursor-pointer hover:bg-[#353ace]">
                <a href="#" className="z-30">
                  <FaFacebookF />
                </a>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#151875] text-white flex items-center justify-center transition-all cursor-pointer hover:bg-[#353ace]">
                <a href="#" className="z-30">
                  <RiInstagramFill />
                </a>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#151875] text-white flex items-center justify-center transition-all cursor-pointer hover:bg-[#353ace]">
                <a href="#" className="z-30">
                  <IoLogoTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
