import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 20px 30px;
  color: #846219;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 23px;
`;

const LogoMark = styled.div`
  height: 70px;
  width: 70px;

  div {
    height: 100%;
    width: 100%;
    background: #EFC75E;
  }
`;

const LogoType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 24px;

  h1 {
    font-size: 41.2px;
    line-height: 48px;
    font-weight: 700;
  }

  p {
    font-size: 16.2px;
    line-height: 19px;
    letter-spacing: 5.4px;
    font-weight: 300;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 64px;
  font-size: 16.2px;
  line-height: 19px;
  letter-spacing: 5.4px;

  a {
    cursor: pointer;
  }

  a:nth-child(2) {
    margin-right: 128px;
    margin-left: 127px;
  }
`;

export {
  HeaderContainer,
  Logo,
  LogoMark,
  LogoType,
  Menu
};