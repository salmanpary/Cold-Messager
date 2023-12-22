import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getBlogs } from "../../lib/graphql/functions";
import BlogCard from "../BlogCard/page";

type Blog = {
	slug: string;
	authorName: string;
	title: string;
	date: string;
	genre: string;
	smallDescription: string;
	headImg: {
		url: string;
	};
	authorImage: {
		url: string;
	};
};

const BlogList = async () => {
	const blogs = await getBlogs();
	return (
		<>
			<Navbar />
			<div className="mt-28 p-5">
				<div className="text-3xl font-bold text-center">Blogs</div>
				<div>
					{blogs.map((blog: Blog, index: number) => (
						<BlogCard blog={blog} key={index} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BlogList;
