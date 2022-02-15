import React from "react";
import { HomeContainer, LandingContainer, PresentationContainer } from "./styled";

export default function Home() {
  return (
    <HomeContainer>
      <LandingContainer>
        <h2>Measuring <br/> everything</h2>
        <div className="dummy"></div>
      </LandingContainer>
      <PresentationContainer>
        <div className="text">
          <h2>We are Leader <br/> in Measure Tapes</h2>
          <p>There are 5x the <br/> circumference of planet <br/> earth in metric tapes.</p>
        </div>
        <div className="dummy"></div>
      </PresentationContainer>
    </HomeContainer>
  );
}
