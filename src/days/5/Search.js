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
  }
}

@keyframes enter
{
	from {
		opacity: 0;
    transform: translateY(-10px);
	}
	to {
		opacity: 1;
    transform: none;
	}
}
`;

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(23, 23, 23, 0.7);
  box-shadow: 0px 0px 62px 11px rgba(0, 0, 0, 0.25);

  max-width: 400px;
  width: inherit;
  margin: 12px;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 6px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px 4px 0 0;
`;

const StyledSearchIcon = styled.div`
  width: 18px;
  height: 18px;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #ffffff;
  font-size: 18px;
  font-family: "Crimson Pro", serif;

  padding: 8px 0;

  &::placeholder {
    font-size: 18px;
    color: #717171;
  }
`;

const StyledResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  border-radius: 0 0 4px 4px;
`;

const StyledResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  width: 100%;

  --delay: 120ms;
  --start: 0ms;

  animation: enter 0.6s both;
  animation-delay: calc(var(--stagger) * var(--delay) + var(--start));

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgba(255, 255, 255, 0.8);
    .timezone {
      width: 6ch;
      display: flex;
      justify-content: center;

      color: rgba(255, 255, 255, 0.7);

      background-color: rgba(60, 86, 51, 1);
      padding: 2px 6px;
      border-radius: 3px;
    }
  }
  .right {
    .time {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const SearchIcon = () => {
  return (
    <StyledSearchIcon>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 15.5L11.6166 12.1166M13.4445 7.72226C13.4445 11.1587 10.6587 13.9445 7.22226 13.9445C3.7858 13.9445 1 11.1587 1 7.72226C1 4.2858 3.7858 1.5 7.22226 1.5C10.6587 1.5 13.4445 4.2858 13.4445 7.72226Z"
          stroke="#555555"
          strokeOpacity="0.66"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledSearchIcon>
  );
};

const Search = () => {
  const results = [
    {
      city: "London, UK",
      time: "6:30 PM",
      timezone: "+0:00",
    },
    {
      city: "Houston, TX, USA",
      time: "6:00 PM",
      timezone: "-5:00",
    },
    {
      city: "Hyderabad, India",
      time: "4:30 PM",
      timezone: "+5:30",
    },
    {
      city: "New York, NY, USA",
      time: "7:00 AM",
      timezone: "-5:00",
    },
    {
      city: "Sydney, Australia",
      time: "12:00 PM",
      timezone: "+10:00",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <StyledSearch>
        <StyledSearchContainer>
          <SearchIcon></SearchIcon>
          <StyledSearchInput
            placeholder="Search for a city"
            type="text"
            spellCheck="false"
            autoComplete="chrome-off"
          ></StyledSearchInput>
        </StyledSearchContainer>
        <StyledResultsContainer>
          {results.map((result, index) => (
            <StyledResult
              key={result.city}
              style={{
                "--stagger": index + 1,
              }}
            >
              <div className="left">
                <div className="timezone">{result.timezone}</div>
                <div className="city">{result.city}</div>
              </div>
              <div className="right">
                <div className="time">{result.time}</div>
              </div>
            </StyledResult>
          ))}
        </StyledResultsContainer>
      </StyledSearch>
    </>
  );
};

export default Search;
