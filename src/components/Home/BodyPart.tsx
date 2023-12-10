import React from 'react'
import Form from './Form'
const BodyPart = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row m-2 mt-20 lg:mt-40 mb-20">
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl xl:text-3xl font-extrabold flex text-center p-4 flex-wrap justify-center items-center">
        Automate your &nbsp;<div className=" text-[#ffcc4b]">Linkedin Cold Messaging</div>&nbsp; <div>with Cold Messager <span className="text-[#ffcc4b]">Extension.</span></div> 
      </div>
      <div className="text-center p-2 text-xl xl:text-2xl font-semibold">
        Send &nbsp;<span className="font-bold text-[#ffcc4b]">Personalized Messages&nbsp;</span>to your Linkedin connections.
      </div>
      <div className="text-base pt-10 font-bold opacity-75">Join the waiting list 🚀</div>
      <Form />
    </div>
    <div className="hidden xl:block" style={{ backgroundColor: '#fefcf3' }}>
      <img src="/magnet-removebg.png" alt="" width={500} height={500} />
    </div>
    <div className="xl:hidden flex justify-center items-center" style={{ backgroundColor: '#fefcf3' }}>
      <img src="/magnet-removebg-preview.jpg" alt="" width={400} height={400} />
    </div>
  </div>
  )
}

export default BodyPart