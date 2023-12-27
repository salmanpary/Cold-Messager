import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loading = () => {
  return (
    <Box sx={{ display: 'flex',justifyContent:'center',alignItems:"center",minHeight:"100vh",minWidth:"80vw" }}>
      <CircularProgress sx={{color:"#ff40a5"}} />
    </Box>
  )
}

export default Loading