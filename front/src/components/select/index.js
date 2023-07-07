import React from "react";
import { Select as AntSelect } from "antd";

export const Select = ({ value, placeholder, options, onChange, ...props }) => {
  return (
    <AntSelect
      {...props}
      value={value}
      placeholder={placeholder}
      options={options}
      onChange={(value) => onChange(value)}
    />
  );
};
