import { getBlog } from "../../../lib/graphql/functions";
import BlogContent from "../../../components/Blog/BlogContent/page";
import Head from "next/head";
export const metadata={
	title: 'Cold Messager',
  description: 'LinkedIn cold messages are an excellent way to reach out to new prospects. Cold messaging on LinkedIn helps you to make new connections and enable you to get in touch with professionals to scale your brand awareness.',
  generator:"Cold Messager",
  applicationName:"Cold Messager",
  keywords:["Linkedin Automation","Automated Cold Messages"],
  type:"article",
  url:"https://coldmessager.com/blog",
  site_name:"Octopus CRM",
  published_time:"2023-08-07T09:32:22+00:00",
  modified_time:"2023-11-06T11:37:49+00:00",
  author:"Alexander Terez",
  image:"https://octopuscrm.io/wp-content/uploads/2023/08/Thumbnail-Best-Ways-to-Cold-Message-on-LinkedIn.webp",
  twitter_card:"summary_large_image",
  
}
const Blog = async ({ params }) => {
	const blog = await getBlog(params.slug);
	return<>
	<BlogContent blog={blog} />

	</>
	
};

export default Blog;
