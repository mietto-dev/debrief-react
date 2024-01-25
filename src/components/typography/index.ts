import React from "react";
import styled from "styled-components";
// TYPOGRAPHY

// add common props:
// color: primary, secondary, etc
// theme: (sets variables, ex: primary, secondary)
// all components inherit common variables from theme

export const Label = styled.label`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const H1 = styled.h1`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  margin: 0;
`;

export default { Label, H1 };
