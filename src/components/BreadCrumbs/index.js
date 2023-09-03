import React from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const BreadCrumbs = () => {
  const location = useLocation();
  let currentPath = "";
  const renderBreadCrums =
    // /products/books/horror/india
    location.pathname
      .split("/")
      .filter((e) => e !== "")
      .map((eachBC) => {
        currentPath += `/${eachBC}`;
        return (
          <Link to={currentPath} className="p-2" key={uuidv4()}>
            {eachBC}
          </Link>
        );
      });

  return (
    <div>
      <h1 className="h4">BreadCrumbs</h1>
      <div className="d-flex">{renderBreadCrums}</div>
    </div>
  );
};

export default BreadCrumbs;
