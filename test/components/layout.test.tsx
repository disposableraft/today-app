import { Layout } from "../../components/layout";
import { render, screen } from "@testing-library/react";

describe("Layout", () => {
  it("renders children", () => {
    render(<Layout>ContentText</Layout>);
    const main = screen.getByRole("main");
    expect(main).toHaveTextContent("ContentText");
  });
});
