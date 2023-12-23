import React from "react";
import BlogList from "../../components/Blog/BlogList/page";
const Blogs = () => {
	return<>
{/* @ts-expect-error Server Component */}
	<BlogList />
	</>
};

export default Blogs;
