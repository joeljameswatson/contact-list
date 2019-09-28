import React from "react";
import styled from "styled-components";

const AppFooter = styled.footer`
  height: 40px;
  background-color: #555;
  padding-left: 15px;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  align-items: center;
  a {
    color: white;
  }
`;

function Footer(props) {
  return (
    <AppFooter>
      <a href="https://github.com/joeljameswatson/contact-list">Source</a>
    </AppFooter>
  );
}

export default Footer;
