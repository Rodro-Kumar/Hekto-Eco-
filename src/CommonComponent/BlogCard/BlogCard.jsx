import React from "react";
import img from "../../assets/Blog1.png";
const BlogCard = () => {
  return (
    <>
      <div className="w-[370px]">
        <div className="w-full h-[255px] rounded-lg overflow-hidden mb-7">
          <img src={img} alt={img} />
        </div>
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
