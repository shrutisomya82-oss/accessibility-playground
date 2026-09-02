type ToolResultProps = {
  toolName: string;
  result?: string;
  isLoading?: boolean;
  error?: string;
};

export default function ToolResult({
  toolName,
  result,
  isLoading = false,
  error,
}: ToolResultProps) {
  if (isLoading) {
    return (
      <section aria-label={`${toolName} result`}>
        <p role="status">Running {toolName}...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section aria-label={`${toolName} result`}>
        <p role="alert">{error}</p>
      </section>
    );
  }

  return (
    <section aria-label={`${toolName} result`}>
      <h2>{toolName}</h2>
      <p>{result}</p>
    </section>
  );
}