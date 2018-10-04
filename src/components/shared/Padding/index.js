import React from "react";

const Padding = props => (
  <div style={{ padding: "15px" }} {...props}>
    {props.children}
  </div>
);

export default Padding;
