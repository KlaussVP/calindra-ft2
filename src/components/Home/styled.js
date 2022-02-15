import styled from "styled-components";

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LandingContainer = styled.section`
  height: 914px;
  color: #716565;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 82.2px;
    line-height: 96px;
    color: #716565;
    margin-right: 27px;
  }

  .dummy {
    width: 682px;
    height: 335px;
    background: #EFC75E;
  }
`;

const PresentationContainer = styled.section`
  height: 1024px;
  background: #506FA9;
  color: #FFF;
`;

export {
  HomeContainer,
  LandingContainer,
  PresentationContainer
}
