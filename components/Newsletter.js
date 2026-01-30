import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const submit = () => {
    if (!email.includes("@")) setStatus("error");
    else setStatus("success");
  };

  if (status === "success")
    return <p data-testid="newsletter-success">Subscribed!</p>;

  return (
    <div data-testid="newsletter-form">
      <input
        data-testid="newsletter-email"
        onChange={e => setEmail(e.target.value)}
      />
      <button data-testid="newsletter-submit" onClick={submit}>
        Submit
      </button>
      {status === "error" && (
        <p data-testid="newsletter-error">Invalid email</p>
      )}
    </div>
  );
}
