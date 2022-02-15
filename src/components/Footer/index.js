import React from "react";
import { GrYoutube, GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FooterContainer, FooterContent, FollowUs, Media, Contact } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FollowUs>
          <h3>Follow Us</h3>
          <Media>
            <div><GrYoutube /></div>
            <div><GrFacebookOption /></div>
            <div><GrTwitter /></div>
          </Media>
        </FollowUs>
        <Contact>
          <h3>Contact</h3>
          <p>
            2490 Leisure Lane <br/> 
            San Luis Obispo <br/> 
            California
          </p>
        </Contact>
      </FooterContent>
    </FooterContainer>
  );
}