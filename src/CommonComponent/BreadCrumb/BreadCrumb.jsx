import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter((x) => (x = x));
  let PathList = "";

  return (
    <>
      <div>
        <ul className="flex items-center gap-x-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link>Pages</Link>
          </li>

          {path.map((item, index) => {
            const last = index === path.length - 1;
            PathList += item;

            return (
              <li
                key={item}
                className={`font-Lato font-medium text-base capitalize ${
                  last ? "text-[#FB2E86]" : "text-black"
                }`}
              >
                <Link>
                  <span className="mr-1">.</span>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
