import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 20px 30px;
  color: #846219;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;

  @media (max-width: 1024px) {
    padding: 5px 20px;
    position: relative;
    height: 57px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 23px;

  @media (max-width: 1024px) {
    margin-left: 2px;
    width: 100%;
  }
`;

const DropDownMenu = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    font-size: 1.625em;
    margin-left: 2px;
    color: #E2E0B8;
    cursor: pointer;
  }
`;

const LogoMark = styled.div`
  height: 70px;
  width: 71px;

  img {
    height: 100%;
    width: 100%;

    @media (max-width: 1024px) {
      height: 39px;
      width: 40px;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    height: initial;
    width: 100%;
    margin: 8px 0 10px;
    top: 0;
    left: calc((100vw - 40px)/2);
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

  @media (max-width: 1024px) {
    display: none;
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

export {
  HeaderContainer,
  Logo,
  DropDownMenu,
  LogoMark,
  LogoType,
  Menu
};