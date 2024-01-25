// my-theme.ts
import { DefaultTheme } from "styled-components";
import FontStyles from "./font";

const DebriefTheme: DefaultTheme = {
  border: "3px solid #ffffff08",

  colors: {
    primary: "#ffffff",
    secondary: "#dddddd",
    background: "#000000",
    // dark: "rgba(1, 23, 14, 0.7)",
    // light: "rgba(2, 41, 25, 0.4)",
  },
};

// TODO theme generator using only BG and HUE parameters, live updates

export { DebriefTheme, FontStyles };
