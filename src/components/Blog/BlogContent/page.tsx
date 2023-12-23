import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import RichText from "../../Contentful/RichText/page";

const BlogContent = ({ blog }) => {
	return (
		<div className="max-w-7xl overflow-x-hidden">
			<Image
				src={blog.headImg.url}
				alt={blog.title}
				width={500}
				height={500}
				className="object-center object-fill sm:w-screen sm:h-screen sm:relative"
			/>
			<div className="hidden sm:block sm:absolute sm:z-10 sm:bottom-0 sm:right-0 sm:w-screen sm:h-full sm:bg-gradient-to-t sm:from-black sm:to-transparent" />
			<h1 className="overflow-x-hidden text-center mx-5 uppercase text-3xl font-extrabold mt-8 sm:text-white sm:text-4xl md:text-5xl lg-7xl sm:mb-8 sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:px-10 sm:z-30 max-w-7xl">
				{blog.title}
			</h1>
			<div className="flex-between px-3 mb-8 mt-4 sm:absolute sm:bottom-2 md:bottom-1 sm:z-30 w-full sm:px-10 max-w-7xl">
				<div className="flex items-center gap-4">
					<Image
						src={blog.authorImage.url}
						alt={blog.authorName}
						width={64}
						height={64}
						className="rounded-full object-cover w-16 h-16 overflow-hidden"
					/>
					<p className="sm:text-white sm:text-xl">
						{blog.authorName}
					</p>
				</div>
				<p className="text-slate-500 sm:text-slate-300 text-lg">
					{formatDistanceToNow(new Date(blog.date))} ago
				</p>
			</div>
			<div className="mx-auto mt-10 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto mb-10 prose">
					<RichText content={blog.blogContent.json} />
				</div>
			</div>
		</div>
	);
};

export default BlogContent;
