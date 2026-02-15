import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import JsonLd from "./components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushdixit.work"),

  title: {
    default: "Ayush Dixit | Senior Java Full Stack Developer | Spring Boot & Microservices Expert",
    template: "%s | Ayush Dixit Portfolio",
  },

  description:
    "Ayush Dixit — Senior Software Engineer with 4.5+ years of experience in Java, Spring Boot, Microservices, React, Next.js, Docker, Kubernetes & AWS. View projects, skills, and hire a top full stack developer in India.",

  keywords: [
    // Name variants
    "Ayush Dixit",
    "Ayush Kumar",
    "Ayush Dixit portfolio",
    "Ayush Dixit developer",
    "Ayush Dixit software engineer",
    // Primary role keywords
    "Java Full Stack Developer",
    "Senior Software Engineer",
    "Senior Java Developer",
    "Full Stack Developer India",
    "Java Developer India",
    "Senior Software Engineer India",
    // Technology keywords
    "Spring Boot Developer",
    "Microservices Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Java Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    // Cloud & DevOps
    "Docker Kubernetes Developer",
    "AWS Developer",
    "Cloud Native Developer",
    "CI/CD Pipeline",
    "DevOps Engineer",
    // Database
    "PostgreSQL Developer",
    "MongoDB Developer",
    "Redis Cache",
    "Oracle Database",
    // Trending keywords
    "REST API Developer",
    "GraphQL Developer",
    "Microservices Architecture",
    "Software Engineer Portfolio",
    "Full Stack Engineer",
    "Backend Developer India",
    "Frontend Developer React",
    "Java Developer Portfolio",
    "Hire Java Developer",
    "Freelance Full Stack Developer",
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
    title: "Ayush Dixit | Senior Java Full Stack Developer",
    description:
      "Senior Software Engineer with 4.5+ years of expertise in Java, Spring Boot, Microservices, React, Next.js, Docker & AWS. View projects, experience, and open source contributions.",
    siteName: "Ayush Dixit — Developer Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Ayush Dixit — Senior Java Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayush Dixit | Senior Java Full Stack Developer",
    description:
      "4.5+ years • Java • Spring Boot • Microservices • React • Next.js • Docker • AWS — View portfolio & open source projects.",
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
      <body className={`${inter.className} bg-white dark:bg-black text-slate-900 dark:text-slate-50 antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
