import styled, { css } from "styled-components";

import React from "react";

const Div = styled.div`
  padding: 15px;

  ${props =>
    props.px &&
    css`
      padding: ${props.px}px;
    `};
`;

const Padding = props => <Div {...props}>{props.children}</Div>;

export default Padding;
