import React from "react";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
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
}
`;

const SearchIcon = () => {
  return (
    <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.4399 10.6277L9.05996 8.2477M10.3458 5.15652C10.3458 7.57386 8.38611 9.53349 5.96877 9.53349C3.55144 9.53349 1.5918 7.57386 1.5918 5.15652C1.5918 2.73918 3.55144 0.779541 5.96877 0.779541C8.38611 0.779541 10.3458 2.73918 10.3458 5.15652Z"
        stroke="#555555"
        strokeOpacity="0.66"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const StyledSearchContainer = styled.div`
  width: 400px;

  background: rgba(23, 23, 23, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 4px;

  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.25);
`;

const StyledSearch = styled.div`
  font-family: "Crimson Pro", serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  font-weight: 400;

  display: flex;
  align-items: center;

  .icon {
    width: 20px;
    margin: 16px 0px 12px 16px;
  }
`;

const StyledSearchInput = styled.input`
  border: none;
  outline: none;

  display: block;
  width: 100%;

  font-size: 18px;
  font-weight: 400;
  font-family: "Crimson Pro", serif;

  color: #e2e2e2;

  background: transparent;

  padding: 14px 16px;

  &::placeholder {
    color: #717171;
  }
`;

const StyledResultsContainer = styled.div`
  padding: 10px 10px;
`;

const StyledResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  .left {
    display: flex;
    gap: 14px;
    font-weight: 400;
    align-items: center;

    .offset {
      color: rgba(255, 255, 255, 0.69);
      background: rgba(162, 255, 130, 0.28);

      padding: 2px 6px;
      border-radius: 2px;
    }
    .city {
      color: rgba(255, 255, 255, 0.79);
    }
  }
  .right {
    color: rgba(255, 255, 255, 0.47);
    font-weight: 400;
  }
`;

const Search = () => {
  return (
    <>
      <GlobalStyle />
      <StyledSearchContainer>
        <StyledSearch>
          <div className="icon">
            <SearchIcon />
          </div>
          <StyledSearchInput
            placeholder="Search for a city"
            type="text"
            spellCheck="false"
            autoComplete="chrome-off"
          />
        </StyledSearch>
        <StyledResultsContainer>
          <StyledResult>
            <div className="left">
              <div className="offset">+ 5:30</div>
              <div className="city">Hyderabad, India</div>
            </div>
            <div className="right">8:45 PM</div>
          </StyledResult>
          <StyledResult>
            <div className="left">
              <div className="offset">- 5:00</div>
              <div className="city">Houston, TX, USA</div>
            </div>
            <div className="right">4:58 AM</div>
          </StyledResult>
          <StyledResult>
            <div className="left">
              <div className="offset">+ 5:30</div>
              <div className="city">Hannover, Germany</div>
            </div>
            <div className="right">10:58 AM</div>
          </StyledResult>
          <StyledResult>
            <div className="left">
              <div className="offset">+ 5:30</div>
              <div className="city">Hamburg, Germany</div>
            </div>
            <div className="right">10:58 AM</div>
          </StyledResult>
        </StyledResultsContainer>
      </StyledSearchContainer>
    </>
  );
};

export default Search;
