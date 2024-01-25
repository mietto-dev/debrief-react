import React from "react";
import { CommonProps } from "../base/base.types";

export enum OutlineBarColors {
  DARK = "rgba(1, 23, 14, 0.7)",
  LIGHT = "rgba(2, 41, 25, 0.4)",
}

export enum OutlineBarSize {
  SMALL,
  BIG,
}

export enum OutlineBarPosition {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
}

export type OutlineBarProps = {
  backgroundColor?: OutlineBarColors;
  size?: OutlineBarSize;
  position?: OutlineBarPosition;
  templateCols?: string;
  gridColumn?: string;
  gridRow?: string;
} & CommonProps;
