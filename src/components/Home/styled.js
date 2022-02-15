import styled from "styled-components";

const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LandingContainer = styled.section`
  width: 100%;
  height: 914px;
  color: #716565;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
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
  width: 100%;
  height: 1024px;
  background: #506FA9;
  color: #FFF;
  display: flex;
  justify-content: space-between;
  position: relative;

  .text {
    position: absolute;
    left: 159px;
    bottom: 216px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    color: #FFF;
    z-index: 1;

    h2 {
      font-size: 69.2px;
      font-weight: 700;
      line-height: 81px;
      margin-bottom: 26px;
    }

    p {
      font-size: 48.2px;
      line-height: 56px;
      font-weight: 300;
    }
  }

  .dummy {
    position: absolute;
    top: 83px;
    right: 0;
    width: 1038px;
    height: 689px;
    opacity: 70%;
    background: #394A1D;
  }
`;

export {
  HomeContainer,
  LandingContainer,
  PresentationContainer
}
