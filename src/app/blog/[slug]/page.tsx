import { getBlog } from "../../../lib/graphql/functions";
import BlogContent from "../../../components/Blog/BlogContent/page";
import type { Metadata } from "next";
export const metadata:Metadata = {
	title: 'The Art of Cold Messaging',
	description: 'Cold messaging is a lead generation strategy that helps to connect with strangers and pitch services or products, while helping you unlock new opportunities! Follow these 7 strategies to optimize your cold messaging and increase your response rate by a 100%.',
	keywords: 'Cold Messaging, Cold Messaging on LinkedIn, Cold Messaging Automation, LinkedIn Outreach, LinkedIn Messaging, LinkedIn Automation',
	robots: 'index, follow',
	
  };
  
const Blog = async ({ params }) => {
	const blog = await getBlog(params.slug);
	return<BlogContent blog={blog} />


	
};

export default Blog;
