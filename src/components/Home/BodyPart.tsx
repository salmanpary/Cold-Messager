import React from "react";
import Form from "./Form";
import CtaDiv from "./CtaDiv";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";
const BodyPart = () => {
  return (
    <>
    <div className="flex flex-col-reverse xl:flex-row m-2 mt-20 lg:mt-40 mb-20">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl xl:text-3xl font-extrabold flex text-center p-4 flex-wrap justify-center items-center">
          <div className=" text-[#ffcc4b]">2x</div>&nbsp;Your Responses with our
          Linkedin&nbsp;<div className=" text-[#ffcc4b]">Cold Message</div>
          &nbsp;{" "}
          <div>
            Automation tool.
          </div>
        </div>
        <div className="text-center p-2 text-xl xl:text-2xl font-semibold">
        Automate your outreach and supercharge your &nbsp;
          <div className="font-bold text-[#ffcc4b]">
          LinkedIn prospecting with Cold Messager
          </div>
         
        </div>
        <div className="text-base pt-10 font-bold opacity-75">
          Join the waiting list 🚀
        </div>
        <Form />
        <div>
          <CtaDiv margin_top={6} padding_x={4} padding_y={8} cta_section={<>
            <span className='text-[#ffcc4b]'>
         Install&nbsp;
        </span>  
      <span className='text-white'>

        and never send a generic message again
      </span>
          </>}/>
        </div>
      
      </div>
      <div className="hidden xl:block" style={{ backgroundColor: "#fefcf3" }}>
        <img src="/magnet-removebg.png" alt="" width={500} height={500} />
      </div>
      <div
        className="xl:hidden flex justify-center items-center"
        style={{ backgroundColor: "#fefcf3" }}
      >
        <img
          src="/magnet-removebg-preview.jpg"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
   <Section />
   <div className="flex justify-center items-center">

   <CtaDiv margin_top={6} padding_x={10} padding_y={8} cta_section={<>
            <span className='text-[#ffcc4b]'>
         Personalise and automate&nbsp;
        </span>  
      <span className='text-white'>

        your Linkedin Messages
      </span>
          </>}/>
   </div>
    <Section2 />
    <div className="flex justify-center items-center">

   <CtaDiv margin_top={6} padding_x={10} padding_y={8} cta_section={<>
            <span className='text-[#ffcc4b]'>
         Save your Template&nbsp;
        </span>  
      <span className='text-white'>
        that fit your target audience
      </span>
          </>}/>
   </div>
   <Section3 />
    
    </>
  );
};

export default BodyPart;
