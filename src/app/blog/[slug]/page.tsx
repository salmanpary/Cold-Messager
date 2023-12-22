import { getBlog } from "../../../lib/graphql/functions";
import Navbar from "../../../components/Navbar/Navbar";
import BlogContent from "../../../components/Blog/BlogContent/page";

const Blog = async ({ params }) => {
	const blog = await getBlog(params.slug);
	return (
		<>
			<Navbar />
			<BlogContent blog={blog} />
		</>
	);
};

export default Blog;
