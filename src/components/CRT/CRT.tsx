import React from "react";
import styled, { keyframes } from "styled-components";
import { CRTProps } from "./CRT.types";
import FontStyles from "../../theme/font";
import Example from "../Example/Example";

const flicker = keyframes`
  0% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Main = styled.main<CRTProps>`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  background-image: linear-gradient(to bottom, transparent 50%, #4b505a 50%),
    linear-gradient(to right, #64718a 50%, #4b505a 50%);
  background-size: 4px 4px, 4px 4px;

  color: #ffffff;
  font-family: "Pixel", monospace;
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.07) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.01),
      rgba(0, 255, 0, 0.005),
      rgba(0, 0, 255, 0.01)
    );
  background-size: 100% 4px, 30px 100%;
  z-index: 1;
  animation: ${flicker} 100ms infinite;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(200, 200, 200);
    background: radial-gradient(
      circle,
      rgba(200, 200, 200, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 2;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  height: 100%;
  z-index: 3;
  padding: 1em;
`;

const CRT: React.FC<CRTProps> = ({ children, ...props }) => {
  return (
    <>
      <FontStyles />
      <Main {...props}>
        <Container>
          <Background />
          <Content>
            <Example />
          </Content>
        </Container>
      </Main>
    </>
  );
};

export default CRT;
