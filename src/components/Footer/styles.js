import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 47px 151px;
  color: #716565;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 41px 75px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
`;

const FollowUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 259px;

  h3 {
    font-weight: 700;
    font-size: 27.2px;
    line-height: 32px;
    margin-bottom: 15px;

    @media (max-width: 1024p) {
      margin-bottom: 21px;
    }
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-left: 1px;
    margin-bottom: 40px;
    align-items: center;
  }
`;

const Media = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42.91px;
    height: 42.91px;
    border: 2.3px solid #716565;
    border-radius: 50%;
    font-size: 22px;
  }

  div:nth-child(2) {
    margin-left: 22.09px;
    margin-right: 18.09px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    font-weight: 700;
    font-size: 27.2px;
    line-height: 32px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16.2px;
    line-height: 19px;
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export {
  FooterContainer,
  FooterContent,
  FollowUs,
  Media,
  Contact
}
