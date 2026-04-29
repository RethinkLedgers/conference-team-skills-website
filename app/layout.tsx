import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Conference Team Skills · 8 free Claude Skills for conference organizing teams",
  description:
    "Eight AI teammates for conference organizers. One for each committee role, plus a Vibe Coder that ships your event website — built so a small team can run a big event. Free.",
  metadataBase: new URL("https://conference-team-skills.vercel.app"),
  openGraph: {
    title: "8 Claude Skills for your conference team",
    description:
      "The whole back office your committee can't afford to hire — one AI teammate per role, free.",
    type: "website",
    images: ["/campaign-visual.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "8 Claude Skills for your conference team",
    description:
      "The whole back office your committee can't afford to hire — free.",
    images: ["/campaign-visual.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
