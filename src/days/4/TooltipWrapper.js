import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Tooltip from "./Tooltip";
import { useRef } from "react";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
  color: #ffffff;
  background: #141414;
  font-family: 'Crimson Pro', serif;
  font-size: 18px;

  .App {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    padding: 2em;
  }

  .block {
    width: 300px;
    height: 30px;
    background: #76987c;
    border-radius: 6px;
  }
}
`;

const StyledTooltipWrapper = styled.div`
  position: relative;
`;

const TooltipWrapper = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    const { x, y } = wrapperRef.current.getBoundingClientRect();
    setCoord({ x: e.clientX - x, y: e.clientY - y });
  };

  return (
    <>
      <GlobalStyle />
      <StyledTooltipWrapper>
        {(show || click) && <Tooltip x={coord.x} />}
        <div
          className="contentWrapper"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => setClick(!click)}
          ref={wrapperRef}
        >
          <div className="block"></div>
        </div>
      </StyledTooltipWrapper>
    </>
  );
};

export default TooltipWrapper;
