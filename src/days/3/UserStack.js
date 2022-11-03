import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,500;1,400;1,500&display=swap');

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
}
`;

const StyledUserStack = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  .overflow {
    margin-left: 10px;
    color: #c8c8c8;

    b {
      font-weight: 500;
    }
  }
`;

const StyledStackUser = styled.div`
  margin-left: -10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
  }

  img {
    max-width: 40px;
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 50%;

    box-shadow: 0px 0px 5px #141414;
  }
`;

const UserStack = () => {
  const images = [
    "https://dr.savee-cdn.com/things/6/0/5cfadf0bc240171299ef3d.webp",
    "https://dr.savee-cdn.com/things/5/f/698dc8935366772b72a3d6.webp",
    "https://dr.savee-cdn.com/things/5/e/a7a0bffc3fd61b6d75603a.webp",
    "https://dr.savee-cdn.com/things/6/1/15482ce3364c5d117cd4c3.webp",
    "https://dr.savee-cdn.com/things/6/0/4a3c1079c96020818d5a8a.webp",
    "https://dr.savee-cdn.com/things/6/0/4a3cce471d3d20ca182fc1.webp",
    "https://dr.savee-cdn.com/things/6/0/560fe6c8067138bd2d75d0.webp",
    "https://dr.savee-cdn.com/things/6/0/6981eb14c7c074161d3b22.webp",
    "https://dr.savee-cdn.com/things/6/1/4ee790963c973f7c33361f.webp",
  ];

  let counter = images.length;
  const max = 5;

  return (
    <>
      <GlobalStyle />

      <StyledUserStack>
        {images.slice(0, max).map((image, index) => (
          <StyledStackUser
            style={{ zIndex: counter - index }}
            onMouseEnter={(e) => {
              counter += 1;
              console.log(counter, index);
              e.currentTarget.style["z-index"] = counter;
            }}
            key={index}
          >
            <img src={image} alt="user" />
          </StyledStackUser>
        ))}
        {images.length > max && (
          <div className="overflow">
            <b>+</b> more {images.length - max} people
          </div>
        )}
      </StyledUserStack>
    </>
  );
};

export default UserStack;
