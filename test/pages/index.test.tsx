import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

it("renders without crashing", () => {
  render(<Home />);
});
