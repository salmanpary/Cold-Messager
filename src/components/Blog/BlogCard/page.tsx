import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
	return (
		<Link href={`/blog/${blog.slug}`}>
			<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4 h-auto hover:shadow-lg transition-all duration-200 transform hover:scale-105">
				<div className="sm:flex sm:h-50">
					<Image
						className="object-cover w-full sm:w-1/4"
						src={blog.headImg.url}
						alt="Blog image"
						width={300}
						height={300}
					/>
					<div className="p-8 sm:w-3/4">
						<div className="flex items-center gap-3">
							<Image
								src={blog.authorImage.url}
								alt={blog.authorName}
								width={40}
								height={40}
								className="rounded-full object-cover w-10 h-10 overflow-hidden"
							/>
							<div className="flex flex-col gap-2 mb-4 sm:flex-row sm:justify-between sm:w-full">
								<div className="flex flex-col">
									<div className="">{blog.authorName}</div>
									<p className="text-sm text-slate-400">
										{formatDistanceToNow(
											new Date(blog.date)
										)}{" "}
										ago
									</p>
								</div>
								<p className="rounded-full w-fit text-xs bg-[#ffcc4b] px-2 py-0.5 text-slate-500 sm:text-sm sm:h-fit sm:flex sm:justify-center sm:items-center">
									{blog.genre}
								</p>
							</div>
						</div>
						<div className="uppercase tracking-wide text-sm text-[#ff40a5] font-semibold mt-2">
							{blog.title}
						</div>
						<p className="mt-2 text-gray-500 overflow-hidden sm:line-clamp-2 md:line-clamp-3">
							{blog.smallDescription}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
