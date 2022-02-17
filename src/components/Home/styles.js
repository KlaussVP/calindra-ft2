import styled from "styled-components";

const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    overflow-x: hidden;
  }
`;

const LandingContainer = styled.section`
  width: 100%;
  height: 914px;
  color: #716565;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    font-weight: 700;
    font-size: 82.2px;
    line-height: 96px;
    color: #716565;
    margin-right: 27px;

    @media (max-width: 1024px) {
      font-size: 53.2px;
      line-height: 62px;
      margin-right: 0;
      margin-bottom: 28px;
      margin-left: 22px;
    }
  }

  img {
    width: 682px;
    height: 335px;

    @media (max-width: 1024px) {
      width: 285px;
      height: 140px;
      margin-left: 18px;
    }
  }

  @media (max-width: 1024px) {
    height: 511px;
    flex-direction: column;
    align-items: flex-start;
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

      @media (max-width: 1024px) {
        font-size: 41.2px;
        line-height: 48px;
        margin-bottom: 22px;
      } 
    }

    p {
      font-size: 48.2px;
      line-height: 56px;
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 26.2px;
        line-height: 31px;  
      } 
    }

    @media (max-width: 1024px) {
      position: absolute;
      left: 14px;
      top: 76px;
      bottom: initial;
    }
  }

  img {
    position: absolute;
    top: 83px;
    right: 0;
    width: 1038px;
    height: 689px;

    @media (max-width: 1024px) {
      position: absolute;
      width: 259px;
      height: 172px;
      top: initial;
      bottom: 70px;
      right: -16px;
    } 
  }

  @media (max-width: 1024px) {
    height: 568px;
  } 
`;

export {
  HomeContainer,
  LandingContainer,
  PresentationContainer
}
