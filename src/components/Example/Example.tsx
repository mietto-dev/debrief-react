import React from "react";
import styled from "styled-components";
import { Pixelated } from "../Pixelated/Pixelated";

// FRAMES
const Frame = styled.div`
  padding: 1em 2em;
  outline: 4px solid rgba(255, 255, 255, 0.2);
  outline-offset: -2px;
`;

const HeaderLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 50%) 1fr minmax(min-content, 20%);
`;

// use a single grid instead of frames
const Header: React.FC<{
  children?: React.ReactNode;
}> = ({ children, ...props }) => {
  return (
    <Frame
      style={{
        backgroundColor: "rgba(1, 23, 14, 0.7)",
        gridColumn: "1/-1",
        gridRow: "row",
      }}
    >
      <HeaderLayout>
        <div>
          <Label style={{ textTransform: "lowercase" }}>{">_"} about</Label>
        </div>
        <div />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "right",
          }}
        >
          <Label style={{ color: "#BBB", fontSize: "12px" }}>X</Label>
        </div>
      </HeaderLayout>
    </Frame>
  );
};

const TitleLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 50%) 1fr minmax(min-content, 20%);
`;

// grid-column: col / span 2;
// grid-row: row ;
const Layout = styled.div`
  display: grid;
  grid-template-columns: [col] 50% [col] 50%;
  grid-template-rows: [row] 5% [row] 10% [row] auto [row] auto;
  padding: 1em 2em;
  height: 100%;
`;

const Title: React.FC<{
  children?: React.ReactNode;
  headerText?: string;
  superText?: string;
  rightContent?: React.ReactNode;
}> = ({ children, headerText, superText, rightContent, ...props }) => {
  return (
    <Frame
      style={{
        backgroundColor: "rgba(2, 41, 25, 0.4)",
        gridColumn: "1/-1",
        gridRow: "row 2",
      }}
    >
      <TitleLayout>
        <div>
          <Label>Dev - Arch - Maker</Label>
          <H1>Felipe Mietto</H1>
        </div>
        <div />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "right",
          }}
        >
          <Label style={{ color: "#BBB", fontSize: "12px" }}>
            10y+ experience
          </Label>
          <Label style={{ color: "#BBB", fontSize: "12px" }}>
            React, GraphQL, Typescript
          </Label>
        </div>
      </TitleLayout>
    </Frame>
  );
};

// TYPOGRAPHY

// add common props:
// color: primary, secondary, etc
// theme: (sets variables, ex: primary, secondary)
// all components inherit common variables from theme

const Label = styled.label`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
`;

const H1 = styled.h1`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  margin: 0;
`;

// CONTENT

const MainContentLeft: React.FC<{
  children?: React.ReactNode;
}> = ({ children, ...props }) => {
  return (
    <Frame style={{ gridColumn: "col", gridRow: "row 3" }}>
      <Pixelated path="/src/assets/images/profile.jpg" />
    </Frame>
  );
};

const MainContentRight: React.FC<{
  children?: React.ReactNode;
}> = ({ children, ...props }) => {
  return (
    <Frame style={{ gridColumn: "col 2", gridRow: "row 3" }}>
      <p>
        BIG CONTENT HERE BIG CONTENT HERE BIG CONTENT HERE BIG CONTENT HERE BIG
        CONTENT HERE BIG CONTENT HERE BIG CONTENT HERE BIG CONTENT HERE BIG
        CONTENT HERE BIG CONTENT HERE BIG CONTENT HERE BIG CONTENT HERE BIG
        CONTENT HERE BIG CONTENT HERE BIG CONTENT HERE BIG CONTENT HERE BIG
        CONTENT HERE{" "}
      </p>
    </Frame>
  );
};

const MainContentBottom: React.FC<{
  children?: React.ReactNode;
}> = ({ children, ...props }) => {
  return (
    <Frame style={{ gridColumn: "1/-1", gridRow: "row 4" }}>
      <p>
        Asd as asdasdlknmklasnmd alslkdfaskld as lkasdml kasml kasasdklm
        aslkmdaslk asdl asdlkmasdlkm salkmaslsd kasdlkmasdlkmasdlkasmlml klkm
        lkmas klmaskmld kmld
      </p>
    </Frame>
  );
};

const Example: React.FC<{ children?: React.ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Layout>
        <Header />
        <Title />
        <MainContentLeft />
        <MainContentRight />
        <MainContentBottom />
      </Layout>
    </>
  );
};

export default Example;
