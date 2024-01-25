import React from "react";
import styled from "styled-components";
import { GridProps } from "./grid.types";

const LayoutDiv = styled.div<{
  $templateCols?: string;
  $templateRows?: string;
}>`
  display: grid;
  gap: 4px;
  grid-template-columns: ${(props) => props.$templateCols || "auto"};
  grid-template-rows: ${(props) => props.$templateRows || "auto"};
`;

export const Grid: React.FC<GridProps> = ({
  children,
  templateCols,
  templateRows,
}) => {
  return (
    <LayoutDiv $templateCols={templateCols} $templateRows={templateRows}>
      {children}
    </LayoutDiv>
  );
};
