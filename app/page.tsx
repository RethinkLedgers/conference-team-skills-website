import Link from "next/link";
import {
  CharConferenceChair,
  CharProgramDirector,
  CharSponsorship,
  CharCMO,
  CharOperations,
  CharCFO,
  CharCXO,
  CharVibeCoder,
} from "./components/CharacterSvgs";
import ContactForm from "./components/ContactForm";
import PasteSection from "./components/PasteSection";

const ROLES = [
  {
    num: "01",
    title: "Conference Chair",
    persona: "Sara",
    sub: "your AI Event Director.",
    tag: "Strategic lead",
    char: <CharConferenceChair />,
    bullets: [
      "Builds the full planning timeline back from event day",
      "Runs the committee — agendas, action items, decision log",
      "Maintains a live risk register with owners and mitigations",
      "Writes the board / stakeholder briefings",
      "Aggregates status across all six other roles",
    ],
    prompt:
      "Build a 9-month timeline for a 500-person summit on September 15. Highlight anything that's already at risk.",
  },
  {
    num: "02",
    title: "Program Director",
    persona: "Marco",
    sub: "your AI agenda architect.",
    tag: "Content",
    char: <CharProgramDirector />,
    bullets: [
      "Designs multi-track agendas with the right pacing",
      "Writes the Call for Speakers and submission rubric",
      "Reviews speaker submissions and ranks them",
      "Drafts speaker outreach and confirmation emails",
      "Produces the session run-of-show document",
    ],
    prompt:
      "I have 60 speaker submissions for the AI track. Help me peer-review and rank them, then draft acceptance and rejection emails.",
  },
  {
    num: "03",
    title: "Head of Sponsorship",
    persona: "James",
    sub: "your AI partnerships exec.",
    tag: "Revenue",
    char: <CharSponsorship />,
    bullets: [
      "Builds prospect lists with fit scoring",
      "Tailors the sponsor deck per prospect",
      "Writes outreach sequences and follow-ups",
      "Drafts agreements and tracks deliverables",
      "Surfaces what each sponsor is owed and when",
    ],
    prompt:
      "Find 30 prospective sponsors for our fintech summit in NYC. Tailor our deck for the top three.",
  },
  {
    num: "04",
    title: "CMO",
    persona: "Priya",
    sub: "your AI Marketing & Comms lead.",
    tag: "Audience",
    char: <CharCMO />,
    bullets: [
      "Plans the 12-week pre-event campaign",
      "Writes emails, social posts, ad copy",
      "Drafts press releases and media pitches",
      "Builds attendee personas and segments",
      "Produces the post-event recap and content series",
    ],
    prompt:
      "Build the 12-week pre-event email campaign — we need to hit 2,000 registrations.",
  },
  {
    num: "05",
    title: "Head of Operations",
    persona: "Tom",
    sub: "your AI Venue & Logistics coordinator.",
    tag: "On-site",
    char: <CharOperations />,
    bullets: [
      "Compares venue proposals on a scored rubric",
      "Plans F&B with dietary coverage and per-head pricing",
      "Designs floor plans and expo layouts",
      "Manages AV, signage, security, badge vendors",
      "Writes the show-day run-of-show, minute by minute",
    ],
    prompt:
      "Compare these three venue proposals and recommend one. Flag risks I should ask about before signing.",
  },
  {
    num: "06",
    title: "CFO",
    persona: "Amelia",
    sub: "your AI Finance & Registration chair.",
    tag: "Money",
    char: <CharCFO />,
    bullets: [
      "Builds the event budget and break-even model",
      "Sets up registration tiers and pricing",
      "Generates and tracks sponsor invoices",
      "Categorizes and reconciles expenses",
      "Answers compliance questions in plain language",
    ],
    prompt:
      "What's our break-even at $895 a ticket? Show me three attendance scenarios.",
  },
  {
    num: "07",
    title: "Chief Experience Officer",
    persona: "Lena",
    sub: "your AI attendee concierge — replaces the pesky conference app with text and WhatsApp, paired with AI Ambassador and ActionNotes.",
    tag: "On-site",
    char: <CharCXO />,
    bullets: [
      "End-to-end attendee journey, arrival to exit",
      "Integration with AI Ambassador for Events — replaces the pesky conference app with SMS, WhatsApp, and RCS (coming soon)",
      "Session reminders and networking matches",
      "Captures sessions and debriefs via ActionNotes",
      "Generates the post-event NPS report",
    ],
    prompt:
      "Set up the on-site helpdesk and session reminders for 1,200 attendees. Multilingual. No app download.",
  },
  {
    num: "08",
    title: "Head of Web",
    persona: "Noor",
    sub: "your AI vibe coder — ships landing pages, full event sites, and sponsor microsites to production fast.",
    tag: "Web",
    char: <CharVibeCoder />,
    bullets: [
      "Spins up a polished landing page in under an hour",
      "Scaffolds full Next.js event sites — agenda, speakers, sponsors, registration, press",
      "Builds per-sponsor microsites with lead capture",
      "Ships everything to Vercel, in version control on GitHub, with preview URLs per PR",
      "Pulls all content from the Knowledge Base — never invents copy",
    ],
    prompt:
      "Spin up the event landing page using our brand and ship it to a Vercel preview today.",
  },
];

const MOCK_CARDS = [
  { num: "01", title: "Conference Chair · Sara Chen", tag: "Critical-path timeline · Risk register · Board briefing", href: "/mock#general-chair" },
  { num: "02", title: "Program Director · Marco Rivera", tag: "2-day agenda · Speaker outreach · Pipeline tracker", href: "/mock#program-content" },
  { num: "03", title: "Head of Sponsorship · James Patel", tag: "3-email outreach sequence · Activation tracker · ROI report", href: "/mock#sponsorship" },
  { num: "04", title: "CMO · Priya Kim", tag: "12-week campaign calendar · 4 email drafts · Press release", href: "/mock#marketing-comms" },
  { num: "05", title: "Head of Operations · Tom Thompson", tag: "Floor plan · Vendor tracker · Minute-by-minute run-of-show", href: "/mock#venue-logistics" },
  { num: "06", title: "CFO · Amelia Okafor", tag: "Full P&L with scenarios · 4 ticket tiers · Sponsor invoice", href: "/mock#finance-registration" },
  { num: "07", title: "Chief Experience Officer · Lena Nguyen", tag: "20-question FAQ · AI Ambassador config · Post-event NPS", href: "/mock#attendee-experience" },
  { num: "08", title: "Head of Web · Noor Khan", tag: "Next.js scaffold · Vercel deploy log · Merged event JSON", href: "/mock#vibe-coder" },
];

const CONNECTORS = [
  { name: "Shared Knowledge Base", desc: "Drive / Dropbox / Notion — single source of truth." },
  { name: "Firecrawl", desc: "Scrape your event website to bootstrap the KB." },
  { name: "Gmail", desc: "Send outreach, confirmations, invoices." },
  { name: "Google Calendar", desc: "Block milestones, schedule speaker calls." },
  { name: "Google Drive", desc: "Templates, contracts, meeting notes." },
  { name: "Zoom", desc: "Pull recordings, extract action items." },
  { name: "Canva", desc: "Decks, social graphics, signage." },
  { name: "ClickUp / Asana", desc: "Tasks, projects, sponsor pipelines." },
  { name: "Twenty CRM", desc: "Sponsor and speaker pipeline tracking." },
  { name: "Vercel", desc: "Deploy the event website fast." },
  { name: "Obsidian", desc: "Institutional memory across years." },
];

const SITE_URL = "https://conference-team-skills-website.vercel.app";

const FAQ_ENTRIES = [
  {
    q: "Do I need to know how to code?",
    a: "No. The browser path is just copy-paste into Claude.ai. The whole reason these are 'skills' rather than software is that the work happens in plain English — yours, going in, and Claude's, coming back.",
  },
  {
    q: "Will Claude make things up about my event?",
    a: "Claude will produce a plausible draft from whatever context you give it. The skills are written to ask for the missing pieces first — event date, scale, audience — before producing output. Treat the first response as a strong first draft, not a final answer.",
  },
  {
    q: "Is my conference data safe?",
    a: "Your conversations stay in your Claude account. The skills don't send anything anywhere on their own — the only data Claude sees is what you paste or what's reachable through integrations you choose to connect.",
  },
  {
    q: "What does it cost?",
    a: "The skills are free, open source (MIT). You pay for Claude — Claude.ai has a free tier and a $20/mo Pro plan that covers most organizers.",
  },
  {
    q: "What if our committee is not a tech team?",
    a: "That's the most common case. Use the Claude.ai browser path. Each committee member loads whichever skill matches their role and starts a conversation — no terminal, no install.",
  },
];

const SOFTWARE_APP_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Conference Team Skills",
  description:
    "Eight open-source Claude Skills covering every role on a conference organizing committee — Conference Chair, Program Director, Head of Sponsorship, CMO, Head of Operations, CFO, Chief Experience Officer, and a Vibe Coder for the event website.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, macOS, Windows, Linux",
  url: SITE_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  license: "https://github.com/msg2ai/conference-team-skills/blob/main/LICENSE",
  softwareVersion: "1.0.4",
  publisher: {
    "@type": "Organization",
    name: "MSG2AI",
    url: "https://msg2ai.xyz",
    logo: `${SITE_URL}/logos/msg2ai.jpg`,
  },
  codeRepository: "https://github.com/msg2ai/conference-team-skills",
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ENTRIES.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APP_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <header className="topbar">
        <div className="topbar-inner">
          <a href="https://msg2ai.xyz" className="brand" target="_blank" rel="noopener noreferrer">
            <img src="/logos/msg2ai.jpg" alt="MSG2AI" className="brand-logo" width={32} height={32} />
            <span>msg2ai<span className="dot">.</span></span>
          </a>
          <nav className="topnav">
            <a href="#team">Your AI team</a>
            <a href="#mock">Mock conference</a>
            <a href="#paste">Copy-paste</a>
            <a href="#start">Install</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" style={{ borderTop: "none", paddingTop: 90 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="pulse" />
            Free · 8 AI teammates · No code required
            <span className="version-badge">v1.0.4</span>
          </div>
          <h1 className="display">
            8 Claude Skills <em>for your conference team.</em>
          </h1>
          <p className="lede">
            The whole back office your committee can&apos;t afford to hire — one AI teammate per role, free.
            Conference Chair, Program Director, Head of Sponsorship, CMO, Head of Operations, CFO, Chief
            Experience Officer, and a Vibe Coder for the website.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#start">
              Get the team <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#mock">
              See real examples
            </a>
            <a className="btn btn-ghost" href="https://github.com/msg2ai/conference-team-skills" target="_blank" rel="noopener noreferrer">
              View on GitHub <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-meta">
            <div className="item">
              <strong>8</strong>AI teammates, one per role
            </div>
            <div className="item">
              <strong>1 hour</strong>to score 60 speaker submissions for the Program Chair
            </div>
            <div className="item">
              <strong>$0</strong>free, MIT licensed
            </div>
            <div className="item">
              <strong>1 command</strong>to install — or copy-paste in your browser
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem">
        <div className="wrap">
          <div className="row">
            <div>
              <p className="display">
                Every conference has the same eight roles. Most teams have two or three people trying to cover all of them.
              </p>
            </div>
            <div className="stats">
              <div className="stat"><strong>8</strong><span>roles on every committee</span></div>
              <div className="stat"><strong>3</strong><span>people typically doing the work</span></div>
              <div className="stat"><strong>40%</strong><span>of organizer time spent on admin</span></div>
              <div className="stat"><strong>~12 mo</strong><span>planning runway, often half that</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles grid */}
      <section id="team">
        <div className="wrap">
          <div className="roles-intro">
            <div>
              <div className="section-eyebrow">Meet your AI team</div>
              <h2 className="section-title">Eight specialists. One conversation each. No onboarding.</h2>
            </div>
            <p className="section-lede">
              Each teammate is a focused brief — a senior version of that role, ready on the first message. Use one. Use all eight. They share context, so when you ask for a board update the General Chair already knows what Sponsorship, Finance, and the Vibe Coder are seeing.
            </p>
          </div>

          <div className="roles">
            {ROLES.map((role) => (
              <article className="role" key={role.num}>
                <div className="role-head">
                  <div className="role-head-text">
                    <span className="role-character">{role.char}</span>
                    <div>
                      <span className="role-num">{role.num}</span>
                      <h3 className="display">{role.title}</h3>
                      <p className="role-sub"><strong>{role.persona}</strong> · {role.sub}</p>
                    </div>
                  </div>
                  <span className="role-tag">{role.tag}</span>
                </div>
                <ul className="role-list">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="role-prompt">{`"${role.prompt}"`}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mock showcase */}
      <section id="mock" className="mock-section">
        <div className="wrap">
          <div className="mock-head">
            <div>
              <div className="section-eyebrow">See a real run · FutureStack 2026</div>
              <h2 className="section-title">Here&apos;s what 8 skills produced for one fictional event.</h2>
            </div>
            <p className="section-lede" style={{ marginBottom: 0 }}>
              A complete mock conference — 800 attendees, 2 days, Austin Convention Center — with every artifact each skill actually generated. Browse the full set in the repo: <a href="https://github.com/msg2ai/conference-team-skills/tree/main/mock"><code>mock/</code></a>.
            </p>
          </div>

          <div className="mock-meta">
            <div className="mock-meta-item">
              <span className="mock-meta-label">Event</span>
              <strong>FutureStack 2026</strong>
              <span className="mock-meta-sub">Oct 15–16 · Austin · 800 attendees · 2 days · single-track</span>
            </div>
            <div className="mock-meta-item">
              <span className="mock-meta-label">Knowledge Base</span>
              <strong>Google Drive — 11 folders</strong>
              <span className="mock-meta-sub">Bootstrapped via Firecrawl from <code>futurestack2025.dev</code></span>
            </div>
            <div className="mock-meta-item">
              <span className="mock-meta-label">Live</span>
              <strong>futurestack2026.dev</strong>
              <span className="mock-meta-sub">Shipped to Vercel · Lighthouse 98/100/100/100</span>
            </div>
            <div className="mock-meta-item">
              <span className="mock-meta-label">Concierge</span>
              <strong>AI Ambassador</strong>
              <span className="mock-meta-sub">SMS + WhatsApp · 8 languages · 🚧 Coming soon</span>
            </div>
          </div>

          <div className="mock-grid">
            {MOCK_CARDS.map((c) => (
              <Link
                key={c.num}
                href={c.href}
                className="mock-card"
              >
                <span className="mock-num">{c.num}</span>
                <h4>{c.title}</h4>
                <p className="mock-tag">{c.tag}</p>
                <span className="mock-link">See 3 outputs →</span>
              </Link>
            ))}
          </div>

          <div className="mock-foot">
            <Link className="btn btn-ghost" href="/mock">
              Browse the full mock conference <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-primary" href="/mock#brief">
              Read the event brief <span className="arrow">→</span>
            </Link>
            <a className="btn btn-ghost" href="https://github.com/msg2ai/conference-team-skills" target="_blank" rel="noopener noreferrer">
              View on GitHub <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Connectors */}
      <section>
        <div className="wrap">
          <div className="section-eyebrow">Plays well with the tools you already use</div>
          <h2 className="section-title">Bring your own stack. Optional, but powerful.</h2>
          <p className="section-lede">
            The skills work without any integrations. Connect the tools your team already uses and they get sharper — pulling real data, sending real emails, updating real boards. You only connect what helps.
          </p>
          <div className="connectors-grid">
            {CONNECTORS.map((c) => (
              <div className="connector" key={c.name}>
                <div className="connector-name">{c.name}</div>
                <div className="connector-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get started */}
      <section id="start">
        <div className="wrap">
          <div className="section-eyebrow">Three ways to get started</div>
          <h2 className="section-title">Pick whichever feels easier. You can change later.</h2>
          <p className="section-lede">
            All three paths give you the same teammates. The only difference is where the conversation lives and how much of your tooling Claude can reach into.
          </p>

          <div className="start-grid">
            <div className="start">
              <div className="start-time">≈ 5 minutes · easiest</div>
              <h3 className="display">Try one in your browser</h3>
              <p>Best if you&apos;ve never used Claude before. Works on any computer. No installs.</p>
              <ol>
                <li>Sign in at <a href="https://claude.ai">claude.ai</a></li>
                <li>Create a Project — name it after your event</li>
                <li>Open any <code>SKILL.md</code> file in the repo and copy the contents</li>
                <li>Paste it into the project&apos;s instructions and save</li>
                <li>Start chatting</li>
              </ol>
              <a className="btn btn-ghost" href="#paste">Step-by-step <span className="arrow">→</span></a>
            </div>

            <div className="start featured">
              <div className="start-time">≈ 10 minutes · recommended</div>
              <h3 className="display">Install all eight on your computer</h3>
              <p>Best if you&apos;ll be using these regularly and want Claude to send emails, update calendars, and use your tools.</p>
              <ol>
                <li>Install Node.js (if you don&apos;t have it)</li>
                <li>Open Terminal and run:<br/><code style={{ background: "rgba(255,255,255,.1)", padding: "6px 10px", borderRadius: 6, display: "inline-block", marginTop: 8 }}>npx conference-team-skills install</code></li>
                <li>Open Claude Code and start asking</li>
              </ol>
              <a className="btn btn-primary" style={{ background: "white", color: "var(--ink)", marginTop: "auto" }} href="#paste-claudecode">
                Install guide <span className="arrow">→</span>
              </a>
            </div>

            <div className="start">
              <div className="start-time">≈ 30 minutes · most powerful</div>
              <h3 className="display">Wire up the full stack</h3>
              <p>Best for committees who run multiple events a year. Connect Gmail, Calendar, Drive, Zoom, your CRM, your project tool — and let the team work in real systems.</p>
              <ol>
                <li>Install via the recommended path</li>
                <li>Run the connector setup wizard</li>
                <li>Add your event website (Vercel)</li>
                <li>You&apos;re now running an event with an 8-person AI back office.</li>
              </ol>
              <a className="btn btn-ghost" href="https://github.com/msg2ai/conference-team-skills#connecting-integrations-optional-but-recommended">
                Connector guide <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Copy-paste section (client component for tabs) */}
      <PasteSection />

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="section-eyebrow">Common questions</div>
          <h2 className="section-title">Things people ask before getting started.</h2>
          <p className="section-lede">
            If your question isn&apos;t here, write to <a href="mailto:info@msg2ai.xyz">info@msg2ai.xyz</a>. Real human, fast reply.
          </p>
          <div className="faq">
            <details>
              <summary>Do I need to know how to code?</summary>
              <div className="answer">No. The browser path is just copy-paste into Claude.ai. The whole reason these are &ldquo;skills&rdquo; rather than software is that the work happens in plain English — yours, going in, and Claude&apos;s, coming back.</div>
            </details>
            <details>
              <summary>Will Claude make things up about my event?</summary>
              <div className="answer">Claude will produce a plausible draft from whatever context you give it. The skills are written to ask for the missing pieces first — event date, scale, audience — before producing output. Treat the first response as a strong first draft, not a final answer.</div>
            </details>
            <details>
              <summary>Is my conference data safe?</summary>
              <div className="answer">Your conversations stay in your Claude account. The skills don&apos;t send anything anywhere on their own — the only data Claude sees is what you paste or what&apos;s reachable through integrations you choose to connect.</div>
            </details>
            <details>
              <summary>What does it cost?</summary>
              <div className="answer">The skills are free, open source (MIT). You pay for Claude — Claude.ai has a free tier and a $20/mo Pro plan that covers most organizers.</div>
            </details>
            <details>
              <summary>What if our committee is not a tech team?</summary>
              <div className="answer">That&apos;s the most common case. Use the Claude.ai browser path. Each committee member loads whichever skill matches their role and starts a conversation — no terminal, no install.</div>
            </details>
            <details>
              <summary>What&apos;s the catch?</summary>
              <div className="answer">
                <p>There isn&apos;t one. We build AI tools for events at <a href="https://msg2ai.xyz">msg2ai.xyz</a>, and we open-sourced the skills because we wanted every conference team to have a real back office. The skills, the mock conference, the website, the npm installer — all free, MIT licensed.</p>
                <p style={{ marginTop: 14 }}>The way <a href="https://msg2ai.xyz">MSG2AI</a> makes money is by selling two paid products. The skills work fully on their own, but the option exists to do tighter integration with these tools when you want a more connected show-day experience:</p>

                <div className="product-plugs">
                  <a className="product-plug" href="https://ai-ambassador.xyz">
                    <div className="product-logo-bar">
                      <img src="/logos/ai-ambassador.png" alt="AI Ambassador for Events" className="product-logo product-logo-wide" width={200} height={48} loading="lazy" decoding="async" />
                    </div>
                    <span className="product-tag">SMS · WhatsApp · RCS coming soon</span>
                    <p>Replaces the pesky conference app. Answers every attendee question by text in 126 languages, sends session reminders, runs networking matches, and ships the post-event NPS — all in 30-second responses, no download required.</p>
                    <span className="product-link">ai-ambassador.xyz →</span>
                  </a>

                  <a className="product-plug" href="https://actionnotes.ai">
                    <div className="product-logo-bar">
                      <img src="/logos/actionnotes.png" alt="ActionNotes" className="product-logo product-logo-square" width={48} height={48} loading="lazy" decoding="async" />
                      <strong>ActionNotes</strong>
                    </div>
                    <span className="product-tag">AI session &amp; meeting capture</span>
                    <p>Turns every session, panel, and committee debrief into structured notes, clear decisions, and assigned action items — automatically. The post-event report basically writes itself, and next year&apos;s organizer thanks you.</p>
                    <span className="product-link">actionnotes.ai →</span>
                  </a>
                </div>

                <p style={{ marginTop: 14, fontSize: 14, color: "var(--ink-mute)" }}>
                  Both are optional — the eight skills work fine without them. They&apos;re just where the skills hand off when the event itself starts running.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="contact-section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-intro">
              <div className="section-eyebrow">Get in touch</div>
              <h2 className="section-title">Question? Custom event? Want to chat?</h2>
              <p className="section-lede">
                Tell us a bit about your conference and we&apos;ll write back. The form opens your default email client and pre-fills a message to <strong>info@msg2ai.xyz</strong> — nothing leaves your computer until you hit send.
              </p>
              <p style={{ color: "var(--ink-mute)", fontSize: 13.5, marginTop: 16 }}>
                Prefer to email directly? <a href="mailto:info@msg2ai.xyz">info@msg2ai.xyz</a>
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="wrap">
          <h2 className="display">Run the conference you wish you had the team for.</h2>
          <p>Pick a teammate. Ask them something. See what comes back. The first useful output happens in about 60 seconds.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#start">Get started <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="https://github.com/msg2ai/conference-team-skills">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <h5>Conference Team Skills</h5>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, maxWidth: "38ch" }}>
                Eight AI teammates for conference organizers. Free, open-source, MIT licensed. Built by{" "}
                <a href="https://msg2ai.xyz">MSG2AI</a>.
              </p>
            </div>
            <div>
              <h5>The 8 skills</h5>
              <ul>
                <li><a href="#team">Conference Chair</a></li>
                <li><a href="#team">Program Director</a></li>
                <li><a href="#team">Head of Sponsorship</a></li>
                <li><a href="#team">CMO</a></li>
                <li><a href="#team">Head of Operations</a></li>
                <li><a href="#team">CFO</a></li>
                <li><a href="#team">Chief Experience Officer</a></li>
                <li><a href="#team">Head of Web (Vibe Coder)</a></li>
              </ul>
            </div>
            <div>
              <h5>Resources</h5>
              <ul>
                <li><a href="https://github.com/msg2ai/conference-team-skills">GitHub repo</a></li>
                <li><a href="https://github.com/msg2ai/conference-team-skills#installation">Install guide</a></li>
                <li><Link href="/mock">Mock conference</Link></li>
                <li><a href="https://claude.ai">Claude.ai</a></li>
              </ul>
            </div>
            <div>
              <h5>MSG2AI &amp; sister products</h5>
              <ul>
                <li><a href="https://msg2ai.xyz">msg2ai.xyz</a></li>
                <li><a href="https://ai-ambassador.xyz">AI Ambassador</a></li>
                <li><a href="https://actionnotes.ai">ActionNotes</a></li>
                <li><a href="mailto:info@msg2ai.xyz">info@msg2ai.xyz</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-legal">
            <p className="legal-note">
              <strong>License.</strong> The Conference Team Skills are released under the{" "}
              <a href="https://github.com/msg2ai/conference-team-skills/blob/main/LICENSE">MIT license</a> — free to use, modify, and redistribute, including for commercial events. Attribution appreciated, not required.
            </p>
            <p className="legal-note">
              <strong>No warranty.</strong> The skills are provided &ldquo;as is&rdquo;, without warranty of any kind. MSG2AI is not responsible for outputs produced by Claude or for actions taken based on them. Always review AI-generated work before sending it, signing it, or publishing it.
            </p>
            <p className="legal-note">
              <strong>Privacy.</strong> This landing page is statically rendered, no analytics, no cookies, no server-side tracking. The contact form opens your local email client; nothing is sent anywhere until you press Send. Anything you do inside Claude is governed by Anthropic&apos;s privacy and terms — see{" "}
              <a href="https://www.anthropic.com/legal/privacy">Anthropic Privacy</a> and{" "}
              <a href="https://www.anthropic.com/legal/consumer-terms">Anthropic Terms</a>.
            </p>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 MSG2AI · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> ·{" "}
              <a href="https://github.com/msg2ai/conference-team-skills/blob/main/LICENSE">MIT License</a> · v1.0.4
            </div>
            <div>For organizers, by organizers.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
