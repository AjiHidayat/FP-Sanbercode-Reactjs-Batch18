import React from "react";
import { Button } from "antd";
import "./Button.css"

const Btn = (props) => {
  return (
    <>
      <Button onClick={props.click} className="btn" type="primary">{props.name}</Button>
    </>
  );
};

export default Btn;
