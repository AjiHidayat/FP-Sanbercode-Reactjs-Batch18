import React from "react";
import { Layout } from "antd";
import "./Bottom.css";

const { Footer } = Layout;

const Bottom = () => {
  return (
    <Layout>
      <Footer className="footer" style={{ textAlign: "center" }}>
        <div className="name-footer">
          <span>@2020 Created by</span>
          <strong>Aji Hidayat</strong>
        </div>
      </Footer>
    </Layout>
  );
};

export default Bottom;
