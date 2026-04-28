"use client";

import { useEffect, useState } from "react";
import { marked } from "marked";

type SkillFile = { name: string; path: string };
type Skill = {
  id: string;
  num: string;
  role: string;
  persona: string;
  sub: string;
  files: SkillFile[];
};

const SKILLS: Skill[] = [
  {
    id: "general-chair",
    num: "01",
    role: "Conference Chair",
    persona: "Sara Chen",
    sub: "Event Director · owner of the master event JSON",
    files: [
      { name: "Critical-path timeline", path: "/mock-data/general-chair/01-timeline.md" },
      { name: "Risk register", path: "/mock-data/general-chair/02-risk-register.md" },
      { name: "Board briefing", path: "/mock-data/general-chair/03-board-briefing.md" },
    ],
  },
  {
    id: "program-content",
    num: "02",
    role: "Program Director",
    persona: "Marco Rivera",
    sub: "Head of Content · agenda and speakers",
    files: [
      { name: "2-day agenda", path: "/mock-data/program-content/01-agenda.md" },
      { name: "Speaker outreach email", path: "/mock-data/program-content/02-speaker-outreach-email.md" },
      { name: "Speaker tracker", path: "/mock-data/program-content/03-speaker-tracker.md" },
    ],
  },
  {
    id: "sponsorship",
    num: "03",
    role: "Head of Sponsorship",
    persona: "James Patel",
    sub: "VP Partnerships · pipeline and activations",
    files: [
      { name: "3-email outreach", path: "/mock-data/sponsorship/01-outreach-sequence.md" },
      { name: "Activation tracker", path: "/mock-data/sponsorship/02-activation-tracker.md" },
      { name: "Sponsor ROI report", path: "/mock-data/sponsorship/03-sponsor-roi-report.md" },
    ],
  },
  {
    id: "marketing-comms",
    num: "04",
    role: "CMO",
    persona: "Priya Kim",
    sub: "Marketing & Comms · audience and PR",
    files: [
      { name: "12-week campaign", path: "/mock-data/marketing-comms/01-campaign-calendar.md" },
      { name: "4 email drafts", path: "/mock-data/marketing-comms/02-email-copy.md" },
      { name: "Press release", path: "/mock-data/marketing-comms/03-press-release.md" },
    ],
  },
  {
    id: "venue-logistics",
    num: "05",
    role: "Head of Operations",
    persona: "Tom Thompson",
    sub: "Venue & Logistics · vendors, F&B, run-of-show",
    files: [
      { name: "Floor plan brief", path: "/mock-data/venue-logistics/01-floor-plan-brief.md" },
      { name: "Vendor tracker", path: "/mock-data/venue-logistics/02-vendor-tracker.md" },
      { name: "Run-of-show (Day 1)", path: "/mock-data/venue-logistics/03-run-of-show.md" },
    ],
  },
  {
    id: "finance-registration",
    num: "06",
    role: "CFO",
    persona: "Amelia Okafor",
    sub: "Finance & Registration · budget, tickets, invoices",
    files: [
      { name: "Budget P&L", path: "/mock-data/finance-registration/01-budget.md" },
      { name: "Registration tiers", path: "/mock-data/finance-registration/02-registration-tiers.md" },
      { name: "Sponsor invoice", path: "/mock-data/finance-registration/03-sponsor-invoice.md" },
    ],
  },
  {
    id: "attendee-experience",
    num: "07",
    role: "Chief Experience Officer",
    persona: "Lena Nguyen",
    sub: "Attendee Experience · concierge, reminders, NPS",
    files: [
      { name: "Pre-event FAQ", path: "/mock-data/attendee-experience/01-faq.md" },
      { name: "AI Ambassador config", path: "/mock-data/attendee-experience/02-ai-ambassador-config.md" },
      { name: "Post-event report", path: "/mock-data/attendee-experience/03-post-event-report.md" },
    ],
  },
  {
    id: "vibe-coder",
    num: "08",
    role: "Head of Web",
    persona: "Noor Khan",
    sub: "Vibe Coder · Next.js + Vercel + GitHub",
    files: [
      { name: "Landing page brief", path: "/mock-data/vibe-coder/01-landing-page-brief.md" },
      { name: "Vercel deploy log", path: "/mock-data/vibe-coder/02-vercel-deploy-log.md" },
      { name: "Event JSON export", path: "/mock-data/vibe-coder/03-event-json-export.md" },
    ],
  },
];

function MarkdownPanel({ path }: { path: string }) {
  const [html, setHtml] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(path);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        if (cancelled) return;
        const rendered = await marked.parse(text);
        if (!cancelled) setHtml(rendered);
      } catch (e) {
        if (!cancelled) setErr(String(e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [path]);
  if (err) {
    return (
      <div className="md-err">
        Could not load <code>{path}</code>. {err}
      </div>
    );
  }
  if (!html) {
    return <div className="md md-loading">Loading…</div>;
  }
  return <div className="md" dangerouslySetInnerHTML={{ __html: html }} />;
}

function SkillSection({ skill }: { skill: Skill }) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section className="skill-section" id={skill.id}>
      <div className="skill-head">
        <span className="skill-num">
          {skill.num} · {skill.role}
        </span>
        <h2>{skill.role}</h2>
        <p className="persona">
          <strong>{skill.persona}</strong> · {skill.sub}
        </p>
      </div>
      <div className="output-tabs">
        {skill.files.map((f, i) => (
          <button
            key={f.name}
            className={`output-tab ${i === activeIdx ? "active" : ""}`}
            onClick={() => setActiveIdx(i)}
          >
            {f.name}
          </button>
        ))}
      </div>
      <div className="output-panel active">
        <MarkdownPanel path={skill.files[activeIdx].path} />
      </div>
    </section>
  );
}

export default function MockViewer() {
  const [active, setActive] = useState<string>("general-chair");

  useEffect(() => {
    const update = () => {
      const hash = (window.location.hash || "#general-chair").slice(1);
      setActive(hash);
    };
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <div className="mock-layout">
      <aside className="mock-sidebar">
        <h4>The committee</h4>
        <nav>
          {SKILLS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : ""}
            >
              <span className="num">{s.num}</span>
              {s.role} · {s.persona.split(" ")[0]}
            </a>
          ))}
        </nav>
        <h4>Reference</h4>
        <nav>
          <a href="#brief">Event brief</a>
          <a
            href="https://github.com/msg2ai/conference-team-skills/tree/main/mock"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
          <a href="/">Landing page</a>
        </nav>
      </aside>

      <main className="mock-content">
        {SKILLS.map((s) => (
          <SkillSection key={s.id} skill={s} />
        ))}

        <section className="skill-section" id="brief">
          <div className="skill-head">
            <span className="skill-num">Reference · The fictional event</span>
            <h2>FutureStack 2026 — event brief</h2>
            <p className="persona">
              The fake event used to demo all 8 skills. Replace this with your own brief in the real Knowledge Base.
            </p>
          </div>
          <div className="output-panel active">
            <MarkdownPanel path="/mock-data/_conference.md" />
          </div>
        </section>
      </main>
    </div>
  );
}
