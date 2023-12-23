import React from "react";

const AboutUs = () => {
	return (
		<div className="mt-28 p-10">
			<div className="text-3xl font-extrabold py-2">About Us</div>
			<div className="text-[#ffcc4b] font-bold text-3xl py-5">
				Minds behind Cold Messager
			</div>
			<div className="pb-6">
				We are a team of 2, studying at Model Engineering College.
				<a
					href="https://www.linkedin.com/in/hisham-hashir-3760481b/"
					className="text-[#ffcc4b] font-bold"
				>
					Hisham
				</a>{" "}
				brings with him a love for all things product and marketing,
				spending his time building campus communities and organizing
				events.
				<a
					href="https://www.linkedin.com/in/salman-pary-bb3bb2152/"
					className="text-[#ffcc4b] font-bold"
				>
					Salman{" "}
				</a>{" "}
				brings in his technical expertise, building full stack web
				applications for the past year, with various internships and was
				a part of a team building a chrome extension previously.
			</div>
			{/* <div className='text-[#ffcc4b] font-bold text-3xl py-2'>
       Our Journey
    </div>
    <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga dolorem vitae libero. Qui ad a, accusantium nostrum sequi numquam libero reiciendis voluptate ratione molestias nemo, suscipit error consequatur sunt rerum aperiam dolor eum?
    </div> */}
			<div className="text-[#ffcc4b] font-bold text-3xl pt-5 pb-5">
				The Product
			</div>
			<div>
				Cold Messager is a chrome extension that helps you optimize your
				cold outreach campaigns on Linkedin. Cold Messager helps you
				hook your prospects with personalized messages.
			</div>
			<div className="h-[15vh]"></div>
		</div>
	);
};

export default AboutUs;
