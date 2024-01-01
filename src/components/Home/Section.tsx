import React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
const Section = () => {
  return (
    <Card sx={{ marginX: { xs: 2, sm: 10 }, padding: 4 }}>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-1/2">
          <div className="font-bold text-2xl py-2">
            Streamline your{" "}
            <span className="font-bold text-[#ffcc4b]">outreach</span>, focus on
            connecting, and let our automation tool do the rest.
          </div>
          <div className="text-xl pb-2">
            Effortlessly{" "}
            <span className="font-bold text-[#ffcc4b]">Personalize</span> and{" "}
            <span className="font-bold text-[#ffcc4b]">Automate</span> your{" "}
            <span className="font-bold text-[#ffcc4b]">LinkedIn Messages</span>
          </div>
          <div className="py-2">
            Say goodbye to manual message typing and repetitive outreach tasks.
            Our LinkedIn Cold Message Automation Tool is an innovative Google{" "}
            <span className="font-bold text-[#ffcc4b]">Chrome Extension</span>{" "}
            that saves you time and effort by automating your message sending
            process on LinkedIn.
          </div>
        </div>
        <div className="h-96 md:h-auto md:flex-1 relative">
          <Image
            src="/linkedin3.png"
            fill
            quality={100}
            className="object-contain object-center rounded-lg"
            alt="section"
          />
        </div>
      </div>
    </Card>
  );
};

export default Section;
