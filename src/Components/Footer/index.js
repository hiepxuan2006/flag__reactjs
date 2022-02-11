import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../App";

function Footer(props) {
  const themeContext = useContext(ThemeContext);
  return (
    <FooterContainer className={themeContext.valueTheme.theme}>
      <h4>Copyright &copy; company</h4>
      <h5>hepxuan2006@gmail.com</h5>
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
`;
