import { getBlog } from "../../../lib/graphql/functions";
import BlogContent from "../../../components/Blog/BlogContent/page";

const Blog = async ({ params }) => {
	const blog = await getBlog(params.slug);
	return <BlogContent blog={blog} />;
};

export default Blog;
