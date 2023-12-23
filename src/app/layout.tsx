import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";
import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const inter = Inter({
	weight: "400",
	subsets: ["latin"],
});
// all ocntent that goes inside <head> tag

export const metadata: Metadata = {
	title: "Cold Messager",
	description:
		"Automate your Linkedin Cold Messaging with personalized messages to your Linkedin connections.",
};
// wrapper around one or more pages
// data of page
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en">
				<body className={inter.className}>
					{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
						<GoogleAnalytics
							GA_TRACKING_ID={
								process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
							}
						/>
					) : null}
					<GoogleAnalytics GA_TRACKING_ID="G-NFW7NHNJMX" />
					<Navbar />
					{children}
					<Footer />
				</body>
			</html>
			<Script src="https://checkout.razorpay.com/v1/checkout.js" />
		</>
	);
}
