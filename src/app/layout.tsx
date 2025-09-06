import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
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