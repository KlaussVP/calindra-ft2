import React from "react";
import { HomeContainer, LandingContainer, PresentationContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <LandingContainer>
        <h2>Measuring <br/> everything</h2>
        <img src="images/first_tape.png" />
      </LandingContainer>
      <PresentationContainer>
        <div className="text">
          <h2>We are Leader <br/> in Measure Tapes</h2>
          <p>There are 5x the <br/> circumference of planet <br/> earth in metric tapes.</p>
        </div>
        <img src="images/second_tape.png" />
      </PresentationContainer>
    </HomeContainer>
  );
}
