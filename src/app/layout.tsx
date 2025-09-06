import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Samridhi Nandwani - Interaction Designer",
  description: "Portfolio of Samridhi Nandwani, an interaction designer crafting meaningful digital experiences through thoughtful design.",
  keywords: ["UX Design", "UI Design", "Interaction Design", "Portfolio", "Digital Design"],
  authors: [{ name: "Samridhi Nandwani" }],
  creator: "Samridhi Nandwani",
  openGraph: {
    title: "Samridhi Nandwani - Interaction Designer",
    description: "Portfolio of Samridhi Nandwani, an interaction designer crafting meaningful digital experiences through thoughtful design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samridhi Nandwani - Interaction Designer",
    description: "Portfolio of Samridhi Nandwani, an interaction designer crafting meaningful digital experiences through thoughtful design.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="font-sans antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}