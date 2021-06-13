import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App.js hello world", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});