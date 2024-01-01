import React from 'react'
import Card from '@mui/material/Card';
import Image from 'next/image'
// const Section3 = () => {
//   return (
//     <Card sx={{marginX:{xs:2,sm:10},padding:4,marginY:10}}>
//     <div className='font-bold text-2xl py-2'>
//     Seamlessly Integrated with <span className='text-[#ffcc4b] font-bold'>
       
//         Google Chrome
//         </span>
        
//     </div>
//     <div className='pb-2'>
//     Our tool integrates seamlessly with your Google Chrome browser, making it easy to access and use when you&lsquo;re browsing LinkedIn. No need to switch between different platforms or install additional software - everything you need is right at your fingertips.
//     </div>
// </Card>
//   )
// }

const Section3=()=>{
  return (
    <Card sx={{marginX:{xs:2,sm:10},padding:4,marginY:10}}>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-1/2">
        <div className='font-bold text-2xl py-2'>
    Seamlessly Integrated with <span className='text-[#ffcc4b] font-bold'>
       
        Google Chrome
        </span>
        
    </div>
    <div className='pb-10'>
    Our tool integrates seamlessly with your Google Chrome browser, making it easy to access and use when you&lsquo;re browsing LinkedIn. No need to switch between different platforms or install additional software - everything you need is right at your fingertips.
    </div>
        </div>
        <div className="h-52 md:h-auto md:flex-1 relative">
          <Image
            src="/linkedin7.png"
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
      export default Section3