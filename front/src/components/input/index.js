import React from "react";
import { Input as InputAntd, Typography } from "antd";

export const Input = ({ onChange, placeholder, type, title, value }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <Typography>{title}</Typography>
      <InputAntd
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

