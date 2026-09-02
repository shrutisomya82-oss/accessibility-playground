type MessageStatus = "pending" | "streaming" | "complete" | "error";

type ChatMessageProps = {
  content: string;
  status: MessageStatus;
  errorMessage?: string;
};

export default function ChatMessage({
  content,
  status,
  errorMessage,
}: ChatMessageProps) {
  if (status === "pending") {
    return (
      <div role="status" aria-label="Message loading">
        Thinking...
      </div>
    );
  }

  if (status === "error") {
    return (
      <div role="alert">
        {errorMessage || "Something went wrong."}
      </div>
    );
  }

  return (
    <article aria-label="Chat message">
      <p>{content}</p>

      {status === "streaming" && (
        <span role="status" aria-label="Message streaming">
          Generating...
        </span>
      )}
    </article>
  );
}