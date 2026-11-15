import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/mmcp/theme-provider";
import { GrainOverlay } from "@/components/mmcp/grain-overlay";
import { FullscreenViewer } from "@/components/mmcp/fullscreen-viewer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MMCP Securities — Polokwane | Risk, Response, Resolve",
  description:
    "MMCP Securities is a Polokwane-based private security firm delivering armed response, tactical guarding, surveillance and executive protection across Limpopo.",
  keywords: [
    "MMCP Securities",
    "Polokwane security",
    "Limpopo security company",
    "armed response",
    "CCTV surveillance",
    "executive protection South Africa",
  ],
  authors: [{ name: "MMCP Securities" }],
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "MMCP Securities — Polokwane",
    description:
      "Gallery-grade private security. Armed response, surveillance, guarding and executive protection across Limpopo.",
    siteName: "MMCP Securities",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <GrainOverlay />
          <FullscreenViewer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
