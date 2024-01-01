import React from 'react'
import Card from '@mui/material/Card';
import Image from 'next/image'
const Section2 = () => {
  return (
    <Card sx={{marginX:{xs:2,sm:10},padding:4,marginTop:10}}>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-1/2">

    <div className='font-bold text-2xl py-2'>
    Save your required&nbsp;<span className='font-bold text-[#ffcc4b]'>Templates</span>&nbsp;for quick and consistent outreach.
    </div>
    <div className='pt-6 pb-10'>
    With our tool, you can create and save <span className='text-[#ffcc4b] font-bold'>customized message templates</span> that fit your target audience. This feature ensures consistency in your outreach while allowing you to tailor your messages for each recipient, personalized and engaging every time.
    </div>
        </div>
        <div className="h-52 md:h-auto md:flex-1 relative">
          <Image
            src="/linkedin8.jpg"
            fill
            quality={100}
            className="object-contain object-center rounded-lg"
            alt="section"
          />
        </div>
      </div>
</Card>
  )
}

export default Section2