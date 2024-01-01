import React from 'react'
import Card from '@mui/material/Card';
const Section2 = () => {
  return (
    <Card sx={{marginX:{xs:2,sm:10},padding:4,marginTop:10}}>
    <div className='font-bold text-2xl py-2'>
    Save your required&nbsp;<span className='font-bold text-[#ffcc4b]'>Templates</span>&nbsp;for quick and consistent outreach.
    </div>
    <div className='pb-2'>
    With our tool, you can create and save <span className='text-[#ffcc4b] font-bold'>customized message templates</span> that fit your target audience. This feature ensures consistency in your outreach while allowing you to tailor your messages for each recipient, personalized and engaging every time.
    </div>
</Card>
  )
}

export default Section2