import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:"center", bgcolor:'#1A1A19',color:'white',p:3}}>
      
      <Box sx={{my:3,"& svg":{
        fontSize:"60px",
        cursor:"pointer",
        mr:2,
      },
      "& svg:hover":{
        color:'goldenrod',
        transform:'translateX(5px)',
        transition:'all 400ms',
      }}}>
        <InstagramIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
        <WhatsAppIcon/>
      </Box>
        <Typography variant='h5' 
        sx={{'@media(max-width:600px)':{
            fontSize:"1rem"
        },}}>
            All Right Reserved &copy; Sandesh k
        </Typography>
      </Box>
    </>
  )
}

export default Footer
