import { render, screen, getByRole } from "@testing-library/react";
import Home from "../../pages/index";

it("renders without crashing", () => {
  render(<Home />);
});

it("contains three sections and each section has a heading", () => {
  render(<Home />);
  const sections = screen.getAllByTestId("section");
  expect(sections).toHaveLength(3);
  sections.forEach((section) => {
    expect(getByRole(section, "heading"));
    expect(getByRole(section, "form"));
    expect(getByRole(section, "list"));
  });
});
