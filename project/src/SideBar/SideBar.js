import React from "react";
import "./SideBar.css";

import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider width={200} className="sider">
      <Menu
        className="site-layout-background"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
          <Menu.Item key="1">option1</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
