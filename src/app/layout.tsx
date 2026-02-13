import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushdixit.work"),
  title: "Ayush Kumar | Senior Java Full Stack Developer",
  description: "Portfolio of Ayush Kumar, a Senior Software Engineer specializing in Java, Spring Boot, Microservices, and Modern Full Stack Development.",
  keywords: [
    "Ayush Kumar",
    "Java Developer",
    "Full Stack Developer",
    "Spring Boot",
    "Microservices",
    "React",
    "Next.js",
    "Software Engineer",
    "Portfolio"
  ],
  authors: [{ name: "Ayush Kumar", url: "https://ayushdixit.work" }],
  creator: "Ayush Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushdixit.work",
    title: "Ayush Kumar | Senior Java Full Stack Developer",
    description: "Senior Software Engineer with expertise in Java, Spring Boot, and Microservices. View projects, skills, and experience.",
    siteName: "Ayush Kumar Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar - Senior Java Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar | Senior Java Full Stack Developer",
    description: "Senior Software Engineer with expertise in Java, Spring Boot, and Microservices.",
    images: ["/profile.png"],
    creator: "@dixitayush",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-slate-900 dark:text-slate-50 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
