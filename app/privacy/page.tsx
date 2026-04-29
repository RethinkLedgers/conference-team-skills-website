import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy · Conference Team Skills",
  description:
    "How the Conference Team Skills marketing site handles your data — what we collect, what we don't, and what happens to anything you type in.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="nav">
        <Link href="/">← Back to landing page</Link>
      </div>
      <h1 className="display">Privacy</h1>
      <p className="lede">
        Minimal tracking. No marketing cookies. Here is exactly what happens to anything you type into this site.
      </p>
      <p className="meta">Last updated: April 28, 2026 · v1.0.4</p>

      <h2>About this page</h2>
      <p>
        The <strong>Conference Team Skills</strong> repository at{" "}
        <a href="https://github.com/msg2ai/conference-team-skills">github.com/msg2ai/conference-team-skills</a>{" "}
        is an open-source collection of Claude Skills released by MSG2AI. This marketing site is a
        statically-rendered Next.js bundle served from Vercel — there is no backend and no third-party
        tracking attached beyond the optional analytics described below.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Google Analytics 4 (aggregate, anonymized).</strong> When the site is deployed with a GA
          measurement ID configured, <code>gtag.js</code> records page views and basic device/region metadata
          via cookies it sets in your browser. We use this only to understand which pages and CTAs are
          working. We do not sell or share this data. You can opt out by enabling Do-Not-Track or any
          standard ad-blocker.
        </li>
      </ul>

      <h2>What we don't collect</h2>
      <ul>
        <li>We do not run any other analytics service (no Plausible, PostHog, Hotjar, etc.).</li>
        <li>We do not set marketing or advertising cookies.</li>
        <li>We do not log IP addresses, user agents, or referrers in our application code.</li>
        <li>We do not embed advertising trackers, pixels, or fingerprinting scripts.</li>
      </ul>

      <h2>Vercel hosting</h2>
      <p>
        The site is hosted on <a href="https://vercel.com">Vercel</a>. Vercel collects standard request logs
        (IP, user agent, URL) for security and abuse-prevention purposes. We do not enable Vercel Analytics or
        Speed Insights on this site. See <a href="https://vercel.com/legal/privacy-policy">Vercel's privacy policy</a>.
      </p>

      <h2>Third-party assets we load</h2>
      <p>For typography and a markdown renderer, the site loads two scripts from public CDNs:</p>
      <ul>
        <li>
          <strong>Google Fonts</strong> — for the Fraunces and Inter typefaces. Loading these may expose your
          IP to Google. See <a href="https://policies.google.com/privacy">Google&apos;s privacy policy</a>.
        </li>
        <li>
          <strong>jsDelivr</strong> — to load <code>marked.js</code> on the mock conference page. See{" "}
          <a href="https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net">jsDelivr&apos;s privacy policy</a>.
        </li>
      </ul>
      <p>If you&apos;d prefer not to be exposed to either, you can self-host the same files locally — see the repository.</p>

      <h2>The contact form</h2>
      <p>
        The contact form on the landing page never transmits anything to a server we control. When you press{" "}
        <em>Send</em>, your browser opens a <code>mailto:</code> link that launches your local email client
        with the contents pre-filled. The email itself is sent through whatever provider you use and is
        governed by their privacy policy.
      </p>
      <p>
        Once your email arrives at <a href="mailto:info@msg2ai.xyz">info@msg2ai.xyz</a>, it is read by people
        at MSG2AI and stored in our email provider (currently Zoho Mail). We use it only to reply to you. We
        don&apos;t add you to a marketing list. You can ask us to delete the email at any time by replying to
        the thread.
      </p>

      <h2>What about Claude itself?</h2>
      <p>
        The skills published in this repository are markdown briefs that run inside{" "}
        <a href="https://claude.ai">Claude</a> or Claude Code. Anything you type into Claude is governed by
        Anthropic&apos;s <a href="https://www.anthropic.com/legal/privacy">Privacy Policy</a> and{" "}
        <a href="https://www.anthropic.com/legal/consumer-terms">Consumer Terms</a> — not by us. The skills do
        not transmit your data anywhere on their own; they only act through tools you have explicitly
        connected (Gmail, Drive, Vercel, etc.), and what those tools do with your data is governed by their
        own privacy policies.
      </p>

      <h2>Children</h2>
      <p>This site is not directed at children under 13 and we do not knowingly collect any information from anyone.</p>

      <h2>Changes</h2>
      <p>If we change this policy we&apos;ll update the version stamp at the top of this page. The full history is visible in the git log of the repository.</p>

      <h2>Contact</h2>
      <p>
        Questions or removal requests: <a href="mailto:info@msg2ai.xyz">info@msg2ai.xyz</a>.
      </p>
    </main>
  );
}
