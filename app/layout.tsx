import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Search Leak Alerter — Get Notified When Your Searched Domains Get Registered",
  description: "Monitor domains you've searched and receive instant email or webhook alerts when someone else registers them. Built for entrepreneurs, domain investors, and startup founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e872d1b3-c702-42cd-8498-f15a05f26d86"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
