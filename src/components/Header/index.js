import React from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HeaderContainer, Logo, DropDownMenu, LogoMark, LogoType, Menu } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <DropDownMenu>
          <BsThreeDotsVertical />
        </DropDownMenu>
        <LogoMark>
          <img src="images/logo.png"/>
        </LogoMark>
        <LogoType>
          <h1>zutterman</h1>
          <p>Measure Tapes</p>
        </LogoType>
      </Logo>
      <Menu>
        <Link to="#">ABOUT US</Link>
        <Link to="#">MODELS</Link>
        <Link to="#">GUARANTEE</Link>
      </Menu>
    </HeaderContainer>
  );
}
