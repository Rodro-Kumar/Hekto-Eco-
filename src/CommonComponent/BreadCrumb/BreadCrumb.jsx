import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shopgrid"}>Shop</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
