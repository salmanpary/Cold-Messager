import React from "react";
import { getBlogs } from "../../../lib/graphql/fetchers";
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

const BlogList: any = async () => {
	const blogs = await getBlogs();
	return (
		<div className="mt-28 p-5 min-h-screen">
			<div className="text-5xl font-bold text-center uppercase mb-8">
				Blogs
			</div>
			<div>
				{blogs.map((blog: Blog, index: number) => (
					<BlogCard blog={blog} key={index} />
				))}
			</div>
		</div>
	);
};

export default BlogList;
