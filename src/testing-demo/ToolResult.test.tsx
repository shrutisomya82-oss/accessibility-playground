import { render, screen } from "@testing-library/react";
import ToolResult from "./ToolResult";

describe("ToolResult", () => {
  test("shows loading state", () => {
    render(
      <ToolResult
        toolName="Resume Analyzer"
        isLoading={true}
      />
    );

    expect(
      screen.getByRole("status")
    ).toHaveTextContent("Running Resume Analyzer...");
  });

  test("shows successful result", () => {
    render(
      <ToolResult
        toolName="Resume Analyzer"
        result="Resume score: 85%"
      />
    );

    expect(
      screen.getByRole("heading", { name: "Resume Analyzer" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Resume score: 85%")
    ).toBeInTheDocument();
  });

  test("shows error state", () => {
    render(
      <ToolResult
        toolName="Resume Analyzer"
        error="Unable to analyze resume."
      />
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Unable to analyze resume."
    );
  });
});