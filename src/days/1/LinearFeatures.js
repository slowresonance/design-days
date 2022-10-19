import { React, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Feature from "./components/Feature";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  body {
    color: #ffffff;
    background: #141414;
    font-family: 'Inter', sans-serif;
    margin: 0;
  }
`;

const StyledFeatures = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: auto;
  height: 100vh;
  justify-content: center;
  align-content: center;
  padding: 0 2em;
`;

const LinearFeatures = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoord({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <StyledFeatures onMouseMove={handleMouseMove} className="features">
        {[...Array(9)].map((e, i) => (
          <Feature mouseX={coord.x} mouseY={coord.y} key={i}></Feature>
        ))}
      </StyledFeatures>
    </>
  );
};

export default LinearFeatures;
