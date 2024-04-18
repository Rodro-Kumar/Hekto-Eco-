import React from "react";
import BlogCard from "../../CommonComponent/BlogCard/BlogCard";
import img2 from "../../assets/Blog2.png";
import img3 from "../../assets/Blog3.png";

const Blog = () => {
  return (
    <>
      <div className="pt-24 pb-28 px-4 lg:px-0">
        <div className="container">
          <div>
            <div>
              <h4 className="text-4xl sm:text-5xl font-bold font-JosfinSans text-[#151875] pb-20 text-center">
                Leatest Blog
              </h4>
            </div>
            <div>
              <div className="flex items-center justify-between flex-col sm:flex-row gap-y-8 sm:gap-y-0">
                <BlogCard />
                <BlogCard blogImg={img2} writter={"Surfauxion"} />
                <BlogCard blogImg={img3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
