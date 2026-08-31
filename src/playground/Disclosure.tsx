import { useState } from "react";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="disclosure-content"
      >
        What is React? {isOpen ? "▲" : "▼"}
      </button>

      {isOpen && (
        <div id="disclosure-content">
          <p>
            React is a JavaScript library used to build interactive user
            interfaces.
          </p>
        </div>
      )}
    </div>
  );
}