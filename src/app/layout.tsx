import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} font-body antialiased bg-secondary text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
