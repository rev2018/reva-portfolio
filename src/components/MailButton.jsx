import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function MailButton({ email, children, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — mailto link below still handles it.
    }
  };

  return (
    <span className="relative inline-flex">
      <a href={`mailto:${email}`} onClick={handleClick} className={className}>
        <HiOutlineMail className="text-lg" />
        {children}
      </a>
      <span
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy-lightest px-3 py-1 text-xs font-mono text-accent transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Email copied — {email}
      </span>
    </span>
  );
}
