import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import clsx from "clsx";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: [],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.openai.fm'),
  title: "OpenAI.fm",
  description: "An interactive demo for developers to try the new text-to-speech model in the OpenAI API",
  authors: [{ name: "OpenAI" }],
  openGraph: {
    title: "OpenAI.fm",
    description: "An interactive demo for developers to try the new text-to-speech model in the OpenAI API",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenAI.fm, a text-to-speech demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("antialiased", jetBrainsMono.className)}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch {}
            })();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
