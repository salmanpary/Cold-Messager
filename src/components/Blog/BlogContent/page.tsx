import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import RichText from "../../Contentful/RichText/page";

const BlogContent = ({ blog }) => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 className="text-center first-letter:text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-24 mb-8 md:mb-0">
				{blog.title}
			</h1>
			<Image
				src={blog.headImg.url}
				alt={blog.title}
				width={500}
				height={300}
				className="object-cover mx-auto mb-8"
			/>
			<div className="flex items-center justify-between mb-8">
				<div className="flex items-center">
					<Image
						src={blog.authorImage.url}
						alt={blog.authorName}
						width={64}
						height={64}
						className="rounded-full mr-4"
					/>
					<p className="text-gray-600 text-sm md:text-base">
						{blog.authorName}
					</p>
				</div>
				<p className="text-gray-500 text-xs">
					{formatDistanceToNow(new Date(blog.date))} ago
				</p>
			</div>
			<div className="prose lg:prose-xl text-gray-500 mx-auto">
				<RichText content={blog.blogContent.json} />
			</div>
		</div>
	);
};

export default BlogContent;
