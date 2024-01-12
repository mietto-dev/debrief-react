// my-theme.ts
import { createGlobalStyle } from "styled-components";
import PixelWoff from "../assets/fonts/pixel-font.woff";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Pixel';
  src: url(${PixelWoff}) format('woff');
}
`;

export default FontStyles;
