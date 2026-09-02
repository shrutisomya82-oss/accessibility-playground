import { render, screen } from "@testing-library/react";
import ChatMessage from "./ChatMessage";

describe("ChatMessage", () => {
  test("shows loading state when pending", () => {
    render(<ChatMessage content="" status="pending" />);

    expect(
      screen.getByRole("status", { name: "Message loading" })
    ).toBeInTheDocument();
  });

  test("shows content while streaming", () => {
    render(
      <ChatMessage
        content="Hello, I am generating a response."
        status="streaming"
      />
    );

    expect(
      screen.getByText("Hello, I am generating a response.")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("status", { name: "Message streaming" })
    ).toBeInTheDocument();
  });

  test("shows completed message content", () => {
    render(
      <ChatMessage
        content="This is the completed response."
        status="complete"
      />
    );

    expect(screen.getByText("This is the completed response."))
      .toBeInTheDocument();
  });

  test("shows an error message", () => {
    render(
      <ChatMessage
        content=""
        status="error"
        errorMessage="Failed to generate response."
      />
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Failed to generate response."
    );
  });
});