import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Datamore | Engineering Intelligent Systems",
  description: "Datamore builds AI automation platforms, data engineering solutions, and intelligent systems for enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght@20..48,100..700&display=swap"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            .material-symbols-outlined {
              font-variant: normal !important;
              font-variant-ligatures: common-ligatures !important;
              -webkit-font-variant-ligatures: common-ligatures !important;
              font-feature-settings: "liga" !important;
            }
          `
        }} />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-on-surface"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
