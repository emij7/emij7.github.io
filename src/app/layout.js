import { Inter } from "next/font/google";
import "./globals.css";
import DocumentShell from "../components/DocumentShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Ignacio Emiliano Juarez | Software Engineer & Full Stack Developer";
const description =
  "Software Engineer and Full Stack Developer specializing in React, Next.js, TypeScript, Node.js and Laravel. Web and mobile application development from idea to production.";

export const metadata = {
  metadataBase: new URL("https://emij7.github.io"),
  title,
  description,
  applicationName: "Ignacio Emiliano Juarez — Portfolio",
  authors: [{ name: "Ignacio Emiliano Juarez", url: "https://emij7.github.io" }],
  creator: "Ignacio Emiliano Juarez",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Laravel",
    "Argentina",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es/",
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    alternateLocale: "es_AR",
    url: "/",
    siteName: "Ignacio Emiliano Juarez — Portfolio",
    images: [
      {
        url: "/background/home-background-bt.png",
        width: 1344,
        height: 768,
        alt: "Ignacio Emiliano Juarez — Software Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/background/home-background-bt.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070a0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <DocumentShell fontVariable={inter.variable}>{children}</DocumentShell>
  );
}
