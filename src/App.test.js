import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio main heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/work experience/i);
  expect(headingElement).toBeInTheDocument();
});
