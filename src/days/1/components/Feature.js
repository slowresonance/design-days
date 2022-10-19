import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledFeature = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 200px;

  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 12px;
  --mouse-x: calc(var(--x) * 1px);
  --mouse-y: calc(var(--y) * 1px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: inherit;
    transition: opacity 600ms ease 0s;
  }

  &::before {
    // for styling the border
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.2),
      transparent 40%
    );
    z-index: 1;
  }

  .content {
    // for laying out the content
    position: absolute;
    flex-grow: 1;
    inset: 1px;
    border-radius: inherit;
    background-color: rgb(23, 23, 23);
    z-index: 2;
  }

  &::after {
    // for styling the glowing effect
    background: radial-gradient(
      1000px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
  }

  .features:hover > &::before {
    opacity: 1;
  }
`;

const Feature = ({ mouseX, mouseY }) => {
  const featureRef = useRef();
  const [coord, setCoord] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    setCoord({
      x: mouseX - rect.left,
      y: mouseY - rect.top,
    });
  };

  useEffect(() => {
    const rect = featureRef.current.getBoundingClientRect();
    setCoord({
      x: mouseX - rect.left,
      y: mouseY - rect.top,
    });
  }, [mouseX, mouseY]);

  return (
    <StyledFeature
      ref={featureRef}
      onMouseMove={handleMouseMove}
      style={{
        "--x": coord.x,
        "--y": coord.y,
      }}
    >
      <div className="content"></div>
    </StyledFeature>
  );
};

export default Feature;
