import React from "react";
import { Link } from "react-router-dom";

const routes = ["Categories", "Stories", "Agent"];

const Navlink = () => {
  return (
    <nav>
      <ul className="flexbox-bc gap-4">
        {routes.map((route, index) => (
          <li key={index} className="text-slate-600 hover:text-blue-700">
            <Link to={`/${route.toLowerCase()}`}>{route}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlink;
