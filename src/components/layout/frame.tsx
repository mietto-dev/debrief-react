import React from "react";
import styled from "styled-components";
import { FrameProps } from "./frame.types";

const FrameDiv = styled.div<{
  $backgroundColor?: string;
  $gridColumn?: string;
  $gridRow?: string;
}>`
  padding: 1em 2em;
  outline: 4px solid rgba(255, 255, 255, 0.2);
  outline-offset: -2px;
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  grid-column: ${(props) => props.$gridColumn || "initial"};
  grid-row: ${(props) => props.$gridRow || "initial"};
`;

export const Frame: React.FC<FrameProps> = ({
  backgroundColor,
  gridColumn,
  gridRow,
  children,
  style,
}) => {
  return (
    <FrameDiv
      $backgroundColor={backgroundColor}
      $gridColumn={gridColumn}
      $gridRow={gridRow}
      style={style}
    >
      {children}
    </FrameDiv>
  );
};
