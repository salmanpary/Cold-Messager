import { getBlog } from "../../../lib/graphql/functions";
import BlogContent from "../../../components/Blog/BlogContent/page";
import type { Metadata } from "next";
export const metadata:Metadata = {
	title: 'The Art of Cold Messaging',
	description: 'Cold messaging is a lead generation strategy that helps to connect with strangers and pitch services or products, while helping you unlock new opportunities! Follow these 7 strategies to optimize your cold messaging and increase your response rate by a 100%.',
	keywords: 'Cold Messaging, Cold Messaging on LinkedIn, Cold Messaging Automation, LinkedIn Outreach, LinkedIn Messaging, LinkedIn Automation',
	robots: 'index, follow', 
	authors:[
		{
			"name":"Hisham Hashir",
			"url":"https://www.coldmessager.com/blog/the-art-of-cold-messaging"
		}
	],
	openGraph:{
		images:[
			{
				url:"https://www.coldmessager.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fy3syxyjnd81j%2F22QjRAS60YBZNGKy19GZqp%2F23744cd89bdaad2974b646d5502c48da%2Fmedium_best_linkedin_cold_message_templates_2658249360.png&w=1080&q=75"
			}

		]
	}
	

	
  };
  
const Blog = async ({ params }) => {
	const blog = await getBlog(params.slug);
	return<BlogContent blog={blog} />


	
};

export default Blog;
