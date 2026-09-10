import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { profile } from "@/lib/data";

// Display face: characterful but restrained. Body: neutral, readable.
// Mono: used deliberately for tech tags / terminal-style UI, not everywhere.
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display"
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: `${profile.name} | AI Full-Stack Developer`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | AI Full-Stack Developer`,
    description: profile.tagline,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | AI Full-Stack Developer`,
    description: profile.tagline
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
