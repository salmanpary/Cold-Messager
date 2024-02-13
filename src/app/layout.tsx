import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";
import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
const schema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Article",
			"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/#article",
			isPartOf: {
				"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/",
			},
			author: {
				name: "Alexander Terez",
				"@id": "https://octopuscrm.io/#/schema/person/45c7ad4cfff2190b921ec05317c7e4ec",
			},
			headline: "Best Ways to Cold Message on LinkedIn",
			datePublished: "2023-08-07T09:32:22+00:00",
			dateModified: "2023-11-06T11:37:49+00:00",
			mainEntityOfPage: {
				"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/",
			},
			wordCount: 4913,
			commentCount: 0,
			publisher: {
				"@id": "https://octopuscrm.io/#organization",
			},
			image: {
				"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/#primaryimage",
			},
			thumbnailUrl:
				"https://octopuscrm.io/wp-content/uploads/2023/08/Thumbnail-Best-Ways-to-Cold-Message-on-LinkedIn.webp",
			articleSection: [
				"Blog",
				"LinkedIn Hacks",
				"Octopus CRM",
				"Sales & Marketing",
			],
			inLanguage: "en-US",
			potentialAction: [
				{
					"@type": "CommentAction",
					name: "Comment",
					target: [
						"https://octopuscrm.io/blog/linkedin-cold-message-examples/#respond",
					],
				},
			],
		},
		{
			"@type": "WebPage",
			"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/",
			url: "https://octopuscrm.io/blog/linkedin-cold-message-examples/",
			name: "LinkedIn Cold Message Examples that Get Replied to - Octopus CRM",
			isPartOf: {
				"@id": "https://octopuscrm.io/#website",
			},
			primaryImageOfPage: {
				"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/#primaryimage",
			},
			image: {
				"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/#primaryimage",
			},
			thumbnailUrl:
				"https://octopuscrm.io/wp-content/uploads/2023/08/Thumbnail-Best-Ways-to-Cold-Message-on-LinkedIn.webp",
			datePublished: "2023-08-07T09:32:22+00:00",
			dateModified: "2023-11-06T11:37:49+00:00",
			description:
				"LinkedIn cold messages are an excellent way to reach out to new prospects. Cold messaging on LinkedIn helps you to make new connections and enable you to get in touch with professionals to scale your brand awareness.",
			breadcrumb: {
				"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/#breadcrumb",
			},
			inLanguage: "en-US",
			potentialAction: [
				{
					"@type": "ReadAction",
					target: [
						"https://octopuscrm.io/blog/linkedin-cold-message-examples/",
					],
				},
			],
		},
		{
			"@type": "ImageObject",
			inLanguage: "en-US",
			"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/#primaryimage",
			url: "https://octopuscrm.io/wp-content/uploads/2023/08/Thumbnail-Best-Ways-to-Cold-Message-on-LinkedIn.webp",
			contentUrl:
				"https://octopuscrm.io/wp-content/uploads/2023/08/Thumbnail-Best-Ways-to-Cold-Message-on-LinkedIn.webp",
			caption: "Thumbnail-Best-Ways-to-Cold-Message-on-LinkedIn",
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://octopuscrm.io/blog/linkedin-cold-message-examples/#breadcrumb",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "OctopusCRM",
					item: "https://octopuscrm.io/",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Blog",
					item: "https://octopuscrm.io/blog/",
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "Best Ways to Cold Message on LinkedIn",
				},
			],
		},
		{
			"@type": "WebSite",
			"@id": "https://octopuscrm.io/#website",
			url: "https://octopuscrm.io/",
			name: "Octopus CRM",
			description:
				"The all-in-one LinkedIn automation software for marketers, owners and recruiters",
			publisher: {
				"@id": "https://octopuscrm.io/#organization",
			},
			potentialAction: [
				{
					"@type": "SearchAction",
					target: {
						"@type": "EntryPoint",
						urlTemplate:
							"https://octopuscrm.io/?s={search_term_string}",
					},
					"query-input": "required name=search_term_string",
				},
			],
			inLanguage: "en-US",
		},
		{
			"@type": "Organization",
			"@id": "https://octopuscrm.io/#organization",
			name: "Octopus CRM",
			url: "https://octopuscrm.io/",
			logo: {
				"@type": "ImageObject",
				inLanguage: "en-US",
				"@id": "https://octopuscrm.io/#/schema/logo/image/",
				url: "https://octopuscrm.io/wp-content/uploads/2019/07/footer-logo.png",
				contentUrl:
					"https://octopuscrm.io/wp-content/uploads/2019/07/footer-logo.png",
				width: 240,
				height: 43,
				caption: "Octopus CRM",
			},
			image: {
				"@id": "https://octopuscrm.io/#/schema/logo/image/",
			},
		},
		{
			"@type": "Person",
			"@id": "https://octopuscrm.io/#/schema/person/45c7ad4cfff2190b921ec05317c7e4ec",
			name: "Alexander Terez",
			image: {
				"@type": "ImageObject",
				inLanguage: "en-US",
				"@id": "https://octopuscrm.io/#/schema/person/image/",
				url: "https://octopuscrm.io/wp-content/uploads/2023/11/Alexter.png",
				contentUrl:
					"https://octopuscrm.io/wp-content/uploads/2023/11/Alexter.png",
				caption: "Alexander Terez",
			},
			description:
				"Alex Terez, part of the Octopus CRM team since 2018, is our standout senior writer. He’s a pro in LinkedIn automation, lead generation, and sales strategies, known for blending thorough research with a light-hearted touch. His articles not only inform but also entertain, making complex topics easily accessible and enjoyable.",
			url: "https://octopuscrm.io/author/terez/",
		},
	],
};

const inter = Inter({
	weight: "400",
	subsets: ["latin"],
});
// all content that goes inside <head> tag

export const metadata: Metadata = {
	title: "Cold Messager",
	description:
		"Automate your Linkedin Cold Messaging with personalized messages to your Linkedin connections.",
	keywords: [
		"Cold Messaging",
		"Cold Messaging on LinkedIn",
		"Cold Messaging Automation",
		"LinkedIn Outreach",
		"LinkedIn Messaging",
		"LinkedIn Automation",
	],
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
				<Head>
					<script type="application/ld+json">
						{JSON.stringify(schema)}
					</script>
				</Head>
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
