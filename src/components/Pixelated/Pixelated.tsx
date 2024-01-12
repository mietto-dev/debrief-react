import React from "react";
import { Pixelify } from "react-pixelify";

const Pixelated: React.FC<{ path: string; pixel?: number }> = ({
  path,
  pixel = 6,
}) => {
  return <Pixelify src={path} pixelSize={pixel} width={"100%"} />;
};

export { Pixelated };
