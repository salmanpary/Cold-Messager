import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";
import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Cold Messager",
  description: "Automate your Linkedin Cold Messaging with personalized messages to your Linkedin connections.",
  twitter: {
    card: "summary_large_image"
  },
  keywords: [
    "Cold Messaging",
    "Cold Messaging on LinkedIn",
    "Cold Messaging Automation",
    "LinkedIn Outreach",
    "LinkedIn Messaging",
    "LinkedIn Automation",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Head>
        <title>Automate your LinkedIn Cold Prospecting</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Cold Messager",
            "operatingSystem": "WINDOWS",
            "applicationCategory": "BusinessApplication",
          })}
        </script>
      </Head>
      <body className={inter.className}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
        <Navbar />
        {children}
        <Footer />
        {/* Razorpay script */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </>
  );
}
