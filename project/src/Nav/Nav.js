import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./Nav.css";
// Component
import TableGame from "../TableGame/TableGame";
import TableMovie from "../TableMovie/TableMovie";
import ListMovie from "../ListMovie/ListMovie";
import ListGame from "../ListGame/ListGame";

const { Header } = Layout;

const Nav = () => {
  return (
    <Router>
      <Header className="header-nav">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to="../TableGame/TableGame">Table Game</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="../TableMovie/TableMovie">Table Movie</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="../ListMovie/ListMovie">List Movie</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="../ListGame/ListGame">List Game</Link>
          </Menu.Item>
        </Menu>
        <div className="brand">
          <h2>AJHDYT</h2>
        </div>
      </Header>
      <Switch>
        <Route exact path="/TableGame/TableGame">
          <TableGame />
        </Route>
        <Route exact path="/TableMovie/TableMovie">
          <TableMovie />
        </Route>
        <Route exact path="/ListMovie/ListMovie">
          <ListMovie />
        </Route>
        <Route exact path="/ListGame/ListGame">
          <ListGame />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
