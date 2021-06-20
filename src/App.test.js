import { fireEvent, getByText, render } from "@testing-library/react";
import { App } from "./App";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

test("renders input binding", () => {
  render(<App />);
  const input = screen.getByTestId("input-text");
  expect(input).toBeInTheDocument();
});

test("create value text", () => {
  render(<App />);
  const text = screen.getByTestId("text-value");
  expect(text).toBeInTheDocument();
});

test("binding two element", () => {
  render(<App />);
  const input = screen.getByTestId("input-text");
  userEvent.type(input, "test");
  const text = screen.getByText("test");
  expect(text).toBeInTheDocument();
});
