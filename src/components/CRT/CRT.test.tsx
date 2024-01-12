import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import CRT from "./CRT";

describe("Running Test for Marbella Button", () => {
  test("Check Button Disabled", () => {
    render(<CRT />);
    expect(
      screen.getByRole("button", { name: "Button marbella" })
    ).toBeDisabled();
  });
});
