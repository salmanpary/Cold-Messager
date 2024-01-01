import React from 'react';
import Paper from '@mui/material/Paper';
import Download from '../Button/Download';
import Card from '@mui/material/Card';

const CtaDiv = ({margin_top,padding_x,padding_y,cta_section}) => {
  return (
    <Card
      elevation={3}
      sx={{
        marginX:2,
        maxWidth: 800,
        paddingX: padding_x,
        paddingY:padding_y,
        marginTop: margin_top,
        position: 'relative', // Set position to relative
        background: `url('/extension8.png')`, // Replace with your image path
        backgroundSize: 'cover', // Ensure the image covers the entire card
        color: 'white', // Set text color to white or another suitable color
        backgroundColor:"#030712"
      }}
    >
        <div>

      <div className='font-bold text-2xl mt-[-30px] text-center'>
       {cta_section}
       
           
      </div>
      <div className='flex justify-center mt-10'>
        <Download />
      </div>
        </div>
    </Card>
  );
}

export default CtaDiv;