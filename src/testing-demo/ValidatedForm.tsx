import { FormEvent, useState } from "react";

export default function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Email form">
      <label htmlFor="email">Email address</label>

      <input
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button type="submit">Submit</button>

      {error && <p role="alert">{error}</p>}

      {submitted && (
        <p role="status">
          Form submitted successfully.
        </p>
      )}
    </form>
  );
}