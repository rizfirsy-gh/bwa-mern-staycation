import React from "react";
import { Link } from "react-router-dom";
import staycation from "../../assets/icons/staycation.svg";
const Logo = () => {
  return (
    <Link to="/" className="flex justify-start items-center gap-2">
      <img src={staycation} alt="staycation" className="logo" />
      <p className="inline-block text-2xl text-blue-700 font-semibold">
        Staycation
      </p>
    </Link>
  );
};

export default Logo;
