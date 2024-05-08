import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'blue', color:'white',p:2}}>
        <Box sx={{my:3, 
        "& svg":{
            fontSize:'40px',
            cursor:'pointer',
            mr:2,
        },
        "& svg:hover":{
            color:"black",
            transform:"translateX(5px)",
            transition:"all 400ms",
        }
        }}>
           {/* //icons  */}
           <FacebookIcon />
           <GitHubIcon/>
           <LinkedInIcon/>
           <YouTubeIcon/>          
        </Box>
        <Typography 
        // variant='h6' 
        sx={{fs:1, "@media (max-width:600px)":{
            fontSize:'1rem',
        },
             }}>
            All Rights Reserved &copy; EzExplanation
        </Typography>

    </Box>
    </>
  )
}

export default Footer;
