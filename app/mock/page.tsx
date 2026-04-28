import type { Metadata } from "next";
import Link from "next/link";
import MockViewer from "./MockViewer";

export const metadata: Metadata = {
  title: "FutureStack 2026 — Mock Conference · Conference Team Skills",
  description:
    "See what 8 Claude Skills produced for one fictional event — every artifact each skill actually generated for FutureStack 2026.",
};

export default function MockPage() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand">
            msg2ai<span className="dot">.</span>{" "}
            <small style={{ fontWeight: 400, color: "var(--ink-mute)", fontSize: 13, marginLeft: 10 }}>
              conference-team-skills · FutureStack 2026 mock
            </small>
          </Link>
          <Link href="/" className="topnav" style={{ color: "var(--ink-soft)", textDecoration: "none", fontSize: 14 }}>
            ← back to landing page
          </Link>
        </div>
      </header>

      <section className="mock-page-hero">
        <div className="section-eyebrow">A complete mock conference</div>
        <h1>FutureStack 2026 — see what 8 skills produced.</h1>
        <p className="lede">
          A fictional 2-day AI infrastructure conference (800 attendees, Austin Convention Center) used to show what each skill actually outputs. Click the tabs to read each artifact.
        </p>
        <div className="mock-page-hero-meta">
          <span><strong>Oct 15–16</strong>Austin, TX</span>
          <span><strong>800</strong>attendees</span>
          <span><strong>$595</strong>standard ticket</span>
          <span><strong>$570k</strong>revenue target</span>
          <span><strong>8</strong>committee skills</span>
        </div>
      </section>

      <MockViewer />

      <footer style={{ padding: "40px 28px", textAlign: "center", color: "var(--ink-mute)", fontSize: 13, borderTop: "1px solid var(--line)" }}>
        Conference Team Skills · v1.0 · Built by{" "}
        <a href="https://msg2ai.xyz" style={{ color: "var(--ink-soft)" }}>MSG2AI</a> ·{" "}
        <a href="mailto:info@msg2ai.xyz" style={{ color: "var(--ink-soft)" }}>info@msg2ai.xyz</a>
        {" · "}
        <Link href="/privacy" style={{ color: "var(--ink-soft)" }}>Privacy</Link>
        {" · "}
        <Link href="/terms" style={{ color: "var(--ink-soft)" }}>Terms</Link>
      </footer>
    </>
  );
}
