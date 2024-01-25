import React from "react";

const Picture: React.FC<{ src: string; pixel?: number; filter?:  }> = ({
  src,
  pixel = 6,
  filter,
}) => {
  return <Pixelated src={src} pixelSize={pixel} width={"100%"} />;
};

export { Picture };
