import React from 'react';
import Paper from '@mui/material/Paper';
import Download from '../Button/Download';
import Card from '@mui/material/Card';

const CtaDiv = ({ margin_top, padding_x, padding_y, cta_section }) => {
  return (
    <Card
      elevation={3}
      sx={{
        marginX: 2,
        maxWidth: 800,
        paddingX: padding_x,
        paddingY: padding_y,
        marginTop: margin_top,
        position: 'relative', // Set position to relative
        background: `url('/extension10.jpg')`, // Replace with your image path
        backgroundSize: 'cover', // Ensure the image covers the entire card
        color: 'white', // Set text color to white or another suitable color
        backdropFilter: 'blur(10px)', // Add backdropFilter for blur effect
        // backgroundColor:"#030712"
      }}
    >
      <div>
        <div className='p-4 rounded-sm  font-extrabold text-2xl mt-[-30px] text-center '  style={{
            backdropFilter: 'blur(8px)', // Apply blur effect to the text background
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust alpha for transparency
          }}>
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
