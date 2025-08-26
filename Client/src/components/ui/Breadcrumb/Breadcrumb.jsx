import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-gray-100 p-3 text-sm font-medium text-gray-600">
      <span>Restaurant</span>
      {pathnames.map((name, index) => (
        <span key={index}>
          {" > "}
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
