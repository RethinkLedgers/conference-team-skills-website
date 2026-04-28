"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fromEmail = (form.elements.namedItem("from") as HTMLInputElement).value.trim();
    const eventName = (form.elements.namedItem("event") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!fromEmail || !message) {
      alert("Please add your email and a short message.");
      return;
    }
    const subject =
      "Conference Team Skills inquiry" + (eventName ? ` — ${eventName}` : "");
    const body =
      `${message}\n\n— \nFrom: ${fromEmail}` +
      (eventName ? `\nEvent: ${eventName}` : "") +
      `\nSent from the Conference Team Skills landing page.`;
    window.location.href = `mailto:info@msg2ai.xyz?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Your email</span>
        <input
          type="email"
          name="from"
          required
          placeholder="you@yourconference.com"
        />
      </label>
      <label>
        <span>Event name (optional)</span>
        <input type="text" name="event" placeholder="FutureStack 2026" />
      </label>
      <label>
        <span>What are you hoping to do?</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="A quick paragraph about your event, your committee, or what you'd like help with."
        />
      </label>
      <p className="form-hint">
        Hitting Send will open your email client with this message pre-filled to{" "}
        <strong>info@msg2ai.xyz</strong>.
      </p>
      <button type="submit" className="btn btn-primary">
        Send to info@msg2ai.xyz <span className="arrow">→</span>
      </button>
    </form>
  );
}
