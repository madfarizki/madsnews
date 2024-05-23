import { render, screen } from "@testing-library/react";
import { Hero } from "@/routes/Home/sections";
import "@testing-library/jest-dom";

describe("Hero Component", () => {
  test("renders hero section with correct text", () => {
    render(<Hero />);
    const welcomeElement = screen.getByText(/WELCOME TO MADSNEWS/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
