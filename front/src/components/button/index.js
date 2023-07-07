import React from "react";
import { Button as AntBtn } from "antd";

export const Button = ({ type = "primary", onClick, children, ...props }) => {
  return (
    <AntBtn {...props} type={type} onClick={onClick} >
      {children}
    </AntBtn>
  );
};
