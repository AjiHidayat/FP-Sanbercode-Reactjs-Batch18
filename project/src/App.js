import React from "react";
import "./App.css";
import "antd/dist/antd.css";
// Component
import Nav from "./Nav/Nav";
import Bottom from "./Bottom/Bottom";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Nav />
      </div>
      <Bottom />
    </div>
  );
} 

export default App;
