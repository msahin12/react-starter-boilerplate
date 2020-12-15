import { render, screen } from "@testing-library/react";
import { NotFoundPage } from "./NotFoundPage";

test("renders NotFoundPage", () => {
  render(<NotFoundPage />);
  const linkElement = screen.getByText(/button/i);
  expect(linkElement).toBeInTheDocument();
});
