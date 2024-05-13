import React, { useEffect, useState } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaList } from "react-icons/fa";
import ShopProductCard from "../../CommonComponent/ShopProductCard/ShopProductCard";
import axios from "axios";
import companyImg from "../../assets/company.png";

const Product = () => {
  const [allproduct, setallproduct] = useState([]);
  const [perPage, setperPage] = useState(12);
  const [listLayout, setlistLayout] = useState(false);

  useEffect(() => {
    const Datafetcher = async () => {
      const allData = await axios.get("https://dummyjson.com/products");
      setallproduct(allData.data.products);
    };

    Datafetcher();
  }, []);

  const HandlePage = (event) => {
    if (event.target.value <= 0) {
      setperPage(12);
    } else if (event.target.value >= 30) {
      setperPage(30);
    } else {
      setperPage(event.target.value);
    }
  };

  const HandleListLayout = () => {
    setlistLayout(true);
  };

  return (
    <>
      <div className="pt-20 md:pt-28 pb-20 px-4 lg:px-0">
        <div className="container">
          {/* ============== top =============== */}
          <div className="flex items-center justify-between flex-wrap md:flex-nowrap text-center md:text-start">
            <div className="pb-5 md:pb-0">
              <h2 className="text-[18px] md:text-[22px] font-JosfinSans font-bold text-[#151875] pb-2">
                Ecommerce Acceories & Fashion item
              </h2>
              <p className="text-xs font-Lato font-normal text-[#8A8FB9]">
                About 9,620 results (0.62 seconds)
              </p>
            </div>
            <div className="flex items-center gap-x-6 flex-wrap md:flex-nowrap gap-y-4 md:gap-y-0 ">
              <div className="flex items-center gap-x-2">
                <p className="text-sm md:text-base font-Lato font-normal text-[#3F509E] whitespace-nowrap">
                  Per Page:
                </p>
                <input
                  type="text"
                  className="h-6 w-[54px] bg-transparent border-2 border-[#E7E6EF] px-1 py-1"
                  onChange={HandlePage}
                />
              </div>
              <div className="flex items-center gap-x-2 w-full">
                <p className="text-sm md:text-base font-Lato font-normal text-[#3F509E]">
                  Sort By:
                </p>
                <select className="cursor-pointer border-2 h-6 w-24 text-[#8A8FB9] text-xs font-Lato font-normal">
                  <option>Best Match</option>
                  <option>Best Match</option>
                  <option>Best Match</option>
                </select>
              </div>
              <div className="gap-x-2 flex items-center">
                <p className="text-sm md:text-base font-Lato font-normal text-[#3F509E]">
                  View:
                </p>
                <div className={`flex items-center gap-x-1 text-[#151875]`}>
                  <div
                    className={`cursor-pointer text-lg ${
                      listLayout ? "text-[#0008ff]" : "text-[#151875]"
                    } `}
                    onClick={() => setlistLayout(false)}
                  >
                    <HiSquares2X2 />
                  </div>
                  <div
                    className={`cursor-pointer text-lg ${
                      listLayout ? "text-[#1a1b46]" : "text-[#0008ff]"
                    }`}
                    onClick={HandleListLayout}
                  >
                    <FaList />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Bottom =========== */}
          <div className="pt-20 md:pt-36 pb-10 md:pb-20">
            <div className="flex flex-wrap justify-between gap-y-12">
              {allproduct?.slice(0, perPage).map((product) => (
                <ShopProductCard
                  rating={product.rating}
                  data={allproduct}
                  listlayout={listLayout}
                  className={`${
                    listLayout
                      ? "md:w-full flex md:h-full gap-x-4 border-2 border-[#7e33e056] shadow-lg"
                      : "md:w-[290px] border-none gap-x-0 flex-col shadow-none"
                  } `}
                  key={product.id}
                  productImg={product.thumbnail}
                  productTitle={product.title}
                  discountStatus={
                    product.discountPercentage > 0
                      ? product.discountPercentage
                      : null
                  }
                  mainPrice={product.price - product.discountPercentage}
                  discount={"$" + product.discountPercentage}
                  productDes={product.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-20">
        <img src={companyImg} alt={companyImg} />
      </div>
    </>
  );
};

export default Product;
