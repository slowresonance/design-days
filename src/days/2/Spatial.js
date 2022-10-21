import { React, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
  color: #ffffff;
  background: #141414;
  font-family: 'Inter', sans-serif;;

  .App {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    padding: 2em;
  }
}
`;

const Frame = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  max-width: 800px;
  max-height: 500px;

  background: rgb(23, 23, 23);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  overflow: hidden;
`;

const Canvas = styled.div`
  position: absolute;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const Rect = styled.div`
  background: rgba(255, 255, 255, 0.05);
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 3px;

  height: ${({ height }) => height}%;
  aspect-ratio: ${({ aspr }) => aspr};
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const Spatial = () => {
  const frameRef = useRef();
  const canvasRef = useRef();

  const [frameDim, setFrameDim] = useState({
    width: 800,
    height: 500,
  });

  const canvasDim = {
    width: 1920,
    height: 1080,
  };

  const handleMouseMove = (e) => {
    const { top, left } = frameRef.current.getBoundingClientRect();
    const offset = { top, left };

    const mouse = {
      x: e.clientX - offset.left,
      y: e.clientY - offset.top,
    };

    const scale = {
      x: mouse.x / frameDim.width,
      y: mouse.y / frameDim.height,
    };

    const range = {
      x: canvasDim.width - frameDim.width,
      y: canvasDim.height - frameDim.height,
    };

    const pan = {
      x: scale.x * range.x * -1,
      y: scale.y * range.y * -1,
    };

    canvasRef.current.animate(
      {
        transform: `translate(${pan.x}px, ${pan.y}px)`,
      },
      {
        duration: 400,
        fill: "forwards",
        easing: "ease",
      }
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (frameRef.current) {
        const { current } = frameRef;
        const { width, height } = current.getBoundingClientRect();
        setFrameDim({
          width: width,
          height: height,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Frame onMouseMove={handleMouseMove} ref={frameRef}>
        <Canvas
          height={canvasDim.height}
          width={canvasDim.width}
          ref={canvasRef}
        >
          <Rect
            height="14.66346154"
            aspr="1.368852459"
            top="17.42788462"
            left="11.171875"
          ></Rect>
          <Rect
            height="17.66826923"
            aspr="1.646258503"
            top="43.38942308"
            left="9.140625"
          ></Rect>
          <Rect
            height="14.66346154"
            aspr="1.368852459"
            top="66.70673077"
            left="16.09375"
          ></Rect>
          <Rect
            height="14.66346154"
            aspr="1.639344262"
            top="45.67307692"
            left="35.78125"
          ></Rect>
          <Rect
            height="23.07692308"
            aspr="1"
            top="13.22115385"
            left="28.28125"
          ></Rect>
          <Rect
            height="22.11538462"
            aspr="1.64673913"
            top="67.66826923"
            left="36.71875"
          ></Rect>
          <Rect
            height="16.82692308"
            aspr="1.371428571"
            top="33.41346154"
            left="47"
          ></Rect>
          <Rect
            height="17.1875"
            aspr="0.9370629371"
            top="8.894230769"
            left="53.125"
          ></Rect>
          <Rect
            height="18.75"
            aspr="1.647435897"
            top="18.87019231"
            left="71.25"
          ></Rect>
          <Rect
            height="23.07692308"
            aspr="1.645833333"
            top="46.75480769"
            left="68.984375"
          ></Rect>
          <Rect
            height="16.82692308"
            aspr="0.8714285714"
            top="74.39903846"
            left="65.3125"
          ></Rect>
        </Canvas>
      </Frame>
    </>
  );
};

export default Spatial;
