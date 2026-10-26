import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { profileData } from "@/data/portfolioData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepanshu.kainthola.com"),
  title: {
    default: "Deepanshu Kainthola — Digital Marketing Manager & Marketing Strategist",
    template: "%s | Deepanshu Kainthola",
  },
  description:
    "Portfolio of Deepanshu Kainthola — Marketing professional combining 7.7 Years Exp. across digital marketing, content strategy, SEO, employer branding, and corporate communication with strategic business thinking.",
  keywords: [
    "Deepanshu Kainthola",
    "Digital Marketing Manager",
    "Marketing Strategist",
    "Employer Branding Manager",
    "Content Strategy",
    "SEO Manager",
    "Marketing Portfolio",
    "Vision India Services",
    "Delhi NCR Marketing Manager",
  ],
  authors: [{ name: "Deepanshu Kainthola", url: "https://deepanshu.kainthola.com" }],
  creator: "Deepanshu Kainthola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepanshu.kainthola.com",
    title: "Deepanshu Kainthola — Digital Marketing Manager & Marketing Strategist",
    description:
      "7.7 Years Exp. driving digital campaigns, content architecture, SEO, and employer branding across 6 corporate brands.",
    siteName: "Deepanshu Kainthola Portfolio",
    images: [
      {
        url: "/images/deepanshu.webp",
        width: 1200,
        height: 630,
        alt: "Deepanshu Kainthola — Digital Marketing Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu Kainthola — Digital Marketing Manager",
    description: "Marketing professional with 7.7 Years Exp. execution & strategic leadership.",
    images: ["/images/deepanshu.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} antialiased min-h-screen flex flex-col bg-[#F3F4F6] dark:bg-[#16181C] text-[#374151] dark:text-[#C4CFDE] transition-colors duration-300`}>
        <AnalyticsTracker />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
