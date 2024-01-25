import React from "react";
import { Frame, Grid } from "../layout";
import {
  OutlineBarPosition,
  OutlineBarProps,
  OutlineBarSize,
} from "./outline-bar.types";

//
export const OutlineBar: React.FC<OutlineBarProps> = ({
  backgroundColor = "rgba(1, 23, 14, 0.7)",
  position = OutlineBarPosition.TOP,
  size = OutlineBarSize.SMALL,
  templateCols = "auto",
  gridColumn = "1/-1",
  gridRow = "1",
  children,
}) => {
  switch (position) {
    case OutlineBarPosition.TOP:
      gridColumn = "1/-1";
      gridRow = "1";
      break;
    case OutlineBarPosition.BOTTOM:
      gridColumn = "1/-1";
      gridRow = "-1";
      break;
    case OutlineBarPosition.LEFT:
      gridColumn = "1";
      gridRow = "1/-1";
      break;
    case OutlineBarPosition.RIGHT:
      gridColumn = "-1";
      gridRow = "1/-1";
      break;
  }

  const minSize =
    size === OutlineBarSize.SMALL
      ? "1em"
      : size === OutlineBarSize.BIG
      ? "2em"
      : "initial";

  const styled: React.CSSProperties = {
    ...((position === OutlineBarPosition.TOP ||
      position === OutlineBarPosition.BOTTOM) && { minHeight: minSize }),
    ...((position === OutlineBarPosition.LEFT ||
      position === OutlineBarPosition.RIGHT) && { minWidth: minSize }),
  };

  return (
    <Frame
      backgroundColor={backgroundColor}
      gridColumn={gridColumn}
      gridRow={gridRow}
      style={styled}
    >
      <Grid templateCols={templateCols}>{children}</Grid>
    </Frame>
  );
};
