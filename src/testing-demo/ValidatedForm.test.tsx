import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ValidatedForm from "./ValidatedForm";

describe("ValidatedForm", () => {
  test("shows validation error for invalid email", async () => {
    const user = userEvent.setup();

    render(<ValidatedForm />);

    const emailInput = screen.getByRole("textbox", {
      name: "Email address",
    });

    await user.type(emailInput, "invalidemail");

    await user.click(
      screen.getByRole("button", { name: "Submit" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please enter a valid email address."
    );
  });

  test("submits successfully with a valid email", async () => {
    const user = userEvent.setup();

    render(<ValidatedForm />);

    const emailInput = screen.getByRole("textbox", {
      name: "Email address",
    });

    await user.type(emailInput, "somya@example.com");

    await user.click(
      screen.getByRole("button", { name: "Submit" })
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      "Form submitted successfully."
    );
  });
});