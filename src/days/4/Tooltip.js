import React from "react";
import styled from "styled-components";

const StyledTooltip = styled.div`
  position: absolute;
  background-color: #313131;
  color: #dddddd;
  padding: 6px 20px;
  border-radius: 6px;
  top: -45px;
  left: calc(var(--x) * 1px);
  transform: translateX(-50%);

  font-weight: 400;
  font-size: 18px;
  white-space: nowrap;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    background: #313131;
    border-radius: 2px;
    z-index: -1;
  }
`;

const Tooltip = ({ x }) => {
  return (
    <StyledTooltip style={{ "--x": x }}>Wednesday, 4th November</StyledTooltip>
  );
};

export default Tooltip;
