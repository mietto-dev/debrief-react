import React from "react";

export type CommonProps<T = HTMLDivElement> = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  attributes?: React.AllHTMLAttributes<T>;
};
