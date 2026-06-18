import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import JsonLd from "./components/JsonLd";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CommandPalette from "./components/CommandPalette";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushdixit.work"),

  title: {
    default: "Ayush Dixit — Senior Software Engineer | Full Stack, MERN & Java Developer",
    template: "%s | Ayush Dixit",
  },

  description:
    "Ayush Dixit is a Senior Software Engineer and Full Stack Developer with ~5 years of experience building scalable products with the MERN stack (MongoDB, Express, React, Node.js), Java, Spring Boot, Microservices, Next.js, TypeScript, Docker, Kubernetes & AWS. Explore projects, system design, open-source work, and hire a top full stack / MERN / Java developer in India.",

  keywords: [
    // Name variants
    "Ayush Dixit",
    "Ayush Kumar",
    "Ayush Dixit portfolio",
    "Ayush Dixit developer",
    "Ayush Dixit software engineer",
    // Primary role keywords
    "Senior Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "MERN Developer",
    "Java Full Stack Developer",
    "Senior Full Stack Developer",
    "Senior Software Engineer India",
    "Full Stack Developer India",
    "MERN Stack Developer India",
    "Java Developer India",
    // MERN specifics
    "MongoDB Express React Node Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    // Java / backend
    "Java Developer",
    "Spring Boot Developer",
    "Microservices Developer",
    "Spring Security",
    "Spring Data JPA",
    "REST API Developer",
    "GraphQL Developer",
    "Backend Developer India",
    // Cloud & DevOps
    "Docker Kubernetes Developer",
    "AWS Developer",
    "Cloud Native Developer",
    "CI/CD Pipeline",
    "DevOps Engineer",
    // Database
    "PostgreSQL Developer",
    "Redis Cache",
    "Rust Developer",
    // Intent
    "Hire Full Stack Developer",
    "Hire MERN Developer",
    "Hire Java Developer",
    "Freelance Full Stack Developer",
    "Software Engineer Portfolio",
    // Company context
    "HCL Software Engineer",
    "Accenture Software Developer",
    "Amdocs Developer",
  ],

  authors: [{ name: "Ayush Dixit", url: "https://ayushdixit.work" }],
  creator: "Ayush Dixit",
  publisher: "Ayush Dixit",

  alternates: {
    canonical: "https://ayushdixit.work",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushdixit.work",
    title: "Ayush Dixit — Senior Software Engineer | Full Stack, MERN & Java Developer",
    description:
      "Senior Software Engineer & Full Stack Developer (~5 yrs) — MERN stack, Java, Spring Boot, Microservices, Next.js, TypeScript, Docker & AWS. View projects, system design, and open-source work.",
    siteName: "Ayush Dixit — Developer Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Ayush Dixit — Senior Software Engineer, Full Stack, MERN & Java Developer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayush Dixit — Senior Software Engineer | Full Stack, MERN & Java",
    description:
      "~5 yrs • MERN (MongoDB, Express, React, Node) • Java • Spring Boot • Microservices • Next.js • Docker • AWS — portfolio & open-source projects.",
    images: ["/profile.png"],
    creator: "@dixitayush",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} ${inter.className} bg-white dark:bg-black text-slate-900 dark:text-slate-50 antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          {children}
          <BackToTop />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
