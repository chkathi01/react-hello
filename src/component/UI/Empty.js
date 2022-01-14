import React from "react";
import styled from "./Empty.module.css";

const Empty = function (props) {
  return (
    <React.Fragment>
      <div className={styled.empty}>{props.children}</div>
    </React.Fragment>
  );
};

export default Empty;
