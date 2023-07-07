import React from "react";
import { Col, Row } from "antd";

export const Layout = ({ children }) => {
  return (
    <Row>
      <Col span={2}></Col>
      <Col
        span={20}
        style={{ width: "100%", height: "100%", marginTop: "40px" }}
      >
        {children}
      </Col>
      <Col span={2}></Col>
    </Row>
  );
};

