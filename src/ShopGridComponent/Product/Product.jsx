import React, { useEffect, useState } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaList } from "react-icons/fa";
import ShopProductCard from "../../CommonComponent/ShopProductCard/ShopProductCard";
import axios from "axios";

const Product = () => {
  const [allproduct, setallproduct] = useState();

  useEffect(() => {
    const Datafetcher = async () => {
      const allData = await axios.get("https://dummyjson.com/products");
      setallproduct(allData.data.products);
    };

    Datafetcher();
  }, []);

  return (
    <>
      <div className="pt-28 pb-20">
        <div className="container">
          {/* ============== top =============== */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[22px] font-JosfinSans font-bold text-[#151875] pb-2">
                Ecommerce Acceories & Fashion item
              </h2>
              <p className="text-xs font-Lato font-normal text-[#8A8FB9]">
                About 9,620 results (0.62 seconds)
              </p>
            </div>
            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-2">
                <p className="text-base font-Lato font-normal text-[#3F509E]">
                  Per Page:
                </p>
                <input
                  type="text"
                  className="h-6 w-[54px] bg-transparent border-2 border-[#E7E6EF] px-1 py-1"
                />
              </div>
              <div className="flex items-center gap-x-2">
                <p className="text-base font-Lato font-normal text-[#3F509E]">
                  Sort By:
                </p>
                <select className="cursor-pointer border-2 h-6 w-24 text-[#8A8FB9] text-xs font-Lato font-normal">
                  <option>Best Match</option>
                  <option>Best Match</option>
                  <option>Best Match</option>
                </select>
              </div>
              <div className="gap-x-2 flex items-center">
                <p className="text-base font-Lato font-normal text-[#3F509E]">
                  View:
                </p>
                <div className="flex items-center gap-x-1 text-[#151875]">
                  <div className="cursor-pointer text-lg">
                    <HiSquares2X2 />
                  </div>
                  <div className="cursor-pointer text-lg">
                    <FaList />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Bottom =========== */}
          <div className="pt-36 pb-20">
            <div className="flex flex-wrap justify-between gap-y-12">
              {allproduct?.slice(0, 12).map((product) => (
                <ShopProductCard
                  key={product.id}
                  productImg={product.thumbnail}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
