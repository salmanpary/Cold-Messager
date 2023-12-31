import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import RichText from "../../Contentful/RichText/page";

const BlogContent = ({ blog }) => {
	return (
		<div className="overflow-x-hidden mt-28 px-10 sm:px-28">
			<div className="text-3xl font-extrabold text-[#ffcc4b] mb-10">
				{blog.title}
			</div>
			<Image
				src={blog.headImg.url}
				alt={blog.title}
				width={500}
				height={500}
				className="object-center object-fill sm:w-screen sm:h-[80vh] sm:relative rounded-2xl"
			/>
			<div className="flex-between px-3 mb-8 mt-4  w-full">
				<div className="flex items-center gap-4">
					<Image
						src={blog.authorImage.url}
						alt={blog.authorName}
						width={64}
						height={64}
						className="rounded-full object-cover w-16 h-16 overflow-hidden"
					/>
					<p className=" sm:text-xl text-[#ff40a5] font-bold">
						{blog.authorName}
					</p>
				</div>
				<p className="text-lg text-[#ff40a5] font-bold">
					{formatDistanceToNow(new Date(blog.date))} ago
				</p>
			</div>
			<div>
				

			</div>
			<div className="mt-10 px-4 sm:px-6 lg:px-8">
				<div className="mb-10 ">
					<RichText content={blog.blogContent.json} />
				</div>
			</div>
		</div>
	);
};

export default BlogContent;
