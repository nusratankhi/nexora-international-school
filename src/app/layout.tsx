import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora International School | Learn • Lead • Excel",
  description:
    "Welcome to Nexora International School. Nurturing young minds, inspiring dreams, and empowering students to achieve academic and lifelong excellence.",
  keywords: [
    "Nexora International School",
    "International School",
    "Cambridge Curriculum",
    "IGCSE",
    "A-Levels",
    "STEM Education",
    "Dhaka International School",
    "Quality Education",
  ],
  authors: [{ name: "Nexora International School" }],
  creator: "Nexora International School",
  metadataBase: new URL("https://nexora.edu.bd"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexora.edu.bd",
    title: "Nexora International School | Learn • Lead • Excel",
    description:
      "At Nexora International School, we nurture young minds, inspire dreams, and empower students to achieve excellence in academics and life.",
    siteName: "Nexora International School",
    images: [
      {
        url: "/images/logo/nexora-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexora International School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora International School | Learn • Lead • Excel",
    description:
      "At Nexora International School, we nurture young minds, inspire dreams, and empower students to achieve excellence in academics and life.",
    images: ["/images/logo/nexora-logo.png"],
  },
  icons: {
    icon: "/images/logo/nexora-logo.png",
    apple: "/images/logo/nexora-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#F4F7FC] text-slate-800 selection:bg-[#0759C7] selection:text-white">
        {children}
      </body>
    </html>
  );
}
