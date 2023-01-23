import React from "react";

const Button = ({ type, children }) => {
  if (type === "primary")
    return <button className="primary-btn">{children}</button>;
  if (type === "secondary")
    return <button className="secondary-btn">{children}</button>;
  if (type === "tertiary")
    return <button className="tertiary-btn">{children}</button>;

  return <button>{children}</button>;
};

export default Button;
