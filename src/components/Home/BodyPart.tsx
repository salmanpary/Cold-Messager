
import React from "react";
import Form from "./Form";
import CtaDiv from "./CtaDiv";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Image from "next/image";
import { Button } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';

const BodyPart = () => {
  return (
    <>
      <div className="flex flex-col-reverse xl:flex-row m-2 mt-20 lg:mt-40 mb-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl xl:text-4xl font-extrabold flex text-center p-4 flex-wrap justify-center items-center">
            <span className="text-[#ffcc4b]">2x</span>&nbsp;Your Responses with our
            Linkedin&nbsp;
            <span className="text-[#ffcc4b]">Cold Message</span>
            &nbsp; <span>Automation tool.</span>
          </h1>
          <h1 className="text-center p-2 text-2xl xl:text-3xl font-semibold">
            Automate your outreach and supercharge your &nbsp;
            <span className="font-bold text-[#ffcc4b]">LinkedIn prospecting with Cold Messager</span>
          </h1>
        </div>
      </div>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#cd201f !important',
          color: 'white',
          height: '50px',
          width: '200px',
          textTransform: 'none',
          marginTop: '30px',
          fontWeight: 'bold',
        }}
        size="large"
        startIcon={<YouTubeIcon fontSize="medium"/>}
        href="https://www.youtube.com/watch?v=IrJhmRthsu8"
      >
        Product Demo
      </Button>

      <div className="mt-4 flex justify-center items-center flex-col">
        <div className="text-base pt-10 font-bold opacity-75">
          Join the waiting list 🚀
        </div>
        <Form />
      </div>

      <div>
        <CtaDiv
          margin_top={6}
          padding_x={4}
          padding_y={8}
          cta_section={
            <>
              <span className="text-[#ff40a5]">Install&nbsp;</span>
              <span className="text-black">
                and never send a generic message again
              </span>
            </>
          }
        />
      </div>

      <div>
        <div className="hidden xl:block" style={{ backgroundColor: "#fefcf3" }}>
          <img src="/magnet-removebg.png" alt="Attract LinkedIn Leads Effortlessly" width="500" height="500" />
          <div
            className="xl:hidden flex justify-center items-center"
            style={{ backgroundColor: "#fefcf3" }}
          >
            <Image
              quality={100}
              src="/magnet-removebg-preview.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
        <Section />
        <div className="grid place-items-center">
          <CtaDiv
            margin_top={6}
            padding_x={4}
            padding_y={8}
            cta_section={
              <h2>
                <span className="text-[#ff40a5]">Personalise and automate&nbsp;</span>
                <span className="text-black">your Linkedin Messages</span>
              </h2>
            }
          />
        </div>
        <Section2 />
        <div className="grid place-items-center">
          <CtaDiv
            margin_top={6}
            padding_x={4}
            padding_y={8}
            cta_section={
              <>
                <span className="text-[#ff40a5]">Save your Template&nbsp;</span>
                <span className="text-black">that fit your target audience</span>
              </>
            }
          />
        </div>
        <Section3 />
      </div>
    </>
  );
};

export default BodyPart;
