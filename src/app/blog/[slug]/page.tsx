import { getBlog } from "../../../lib/graphql/fetchers";
import BlogContent from "../../../components/Blog/BlogContent/page";
import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { metaTags } = await getBlog(params.slug);
	return {
		title: metaTags?.metaTitle || "",
		description: metaTags?.metaDescription || "",
		keywords: metaTags?.metaKeywords || "",
		robots: metaTags?.metaRobots || "",
		authors: metaTags?.metaAuthor || [],
	};
}

const Blog = async ({ params }) => {
	const blog = await getBlog(params.slug);
	return <BlogContent blog={blog} />;
};

export default Blog;
