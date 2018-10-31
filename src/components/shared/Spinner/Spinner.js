import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Spinner = ({ isVisible }) => {
  if (isVisible) {
    return (
      <Container>
        <CircularProgress size={50} />
      </Container>
    );
  }
  return null;
};

export default Spinner;
