import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
	return (
		<Link href={`/blog/${blog.slug}`}>
			<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4">
				<div className="md:flex">
					<div className="md:flex-shrink-0">
						<Image
							className="h-48 w-full object-cover md:w-48"
							src={blog.headImg.url}
							alt="Blog image"
							width={300}
							height={300}
						/>
					</div>
					<div className="p-8">
						<div className="flex items-center">
							<Image
								src={blog.authorImage.url}
								alt={blog.authorName}
								width={40}
								height={40}
								className="rounded-full"
							/>
							<div className="text-gray-500 ml-4">
								{blog.authorName}
							</div>
						</div>
						<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-2">
							{blog.title}
						</div>
						<p className="mt-2 text-gray-500">
							{blog.smallDescription}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
