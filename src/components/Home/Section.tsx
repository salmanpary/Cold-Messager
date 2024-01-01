import React from 'react'
import Card from '@mui/material/Card';
const Section = () => {
  return (
    <Card sx={{marginX:{xs:2,sm:10},padding:4}}>
        <div className='font-bold text-2xl py-2'>
        Streamline your <span className='font-bold text-[#ffcc4b]'>outreach</span>, focus on connecting, and let our automation tool do the rest.
        </div>
        <div className='text-xl pb-2'>
        Effortlessly <span className='font-bold text-[#ffcc4b]'>
        Personalize
            </span> and <span className='font-bold text-[#ffcc4b]'>
            Automate
                </span> your  <span className='font-bold text-[#ffcc4b]'>
                LinkedIn Messages
                    </span>
        </div>
       <div>
       Say goodbye to manual message typing and repetitive outreach tasks. Our LinkedIn Cold Message Automation Tool is an innovative Google <span className='font-bold text-[#ffcc4b]'>
       Chrome Extension
        </span> that saves you time and effort by automating your message sending process on LinkedIn.
       </div>
    </Card>
  )
}

export default Section