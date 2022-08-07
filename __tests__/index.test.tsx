import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a link to the about page", () => {
    render(<Home />);

    const link = screen.getByRole("link", {
      name: /about/i,
    });

    expect(link).toBeInTheDocument();
  });
});
