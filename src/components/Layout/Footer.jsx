// import React from 'react'
// import { Box, Divider, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from "../../assets/react.svg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

// const Footer = () => {
//   return (
//     <>
//     <Box sx={{textAlign:'center', bgcolor:'blue', color:'white',p:2}}>
//         <Box sx={{my:3, 
//         "& svg":{
//             fontSize:'40px',
//             cursor:'pointer',
//             mr:2,
//         },
//         "& svg:hover":{
//             color:"black",
//             transform:"translateX(5px)",
//             transition:"all 400ms",
//         }
//         }}>
//            {/* //icons  */}
//            <FacebookIcon />
//            <GitHubIcon/>
//            <LinkedInIcon/>
//            <YouTubeIcon/>          
//         </Box>
//         <Typography 
//         // variant='h6' 
//         sx={{fs:1, "@media (max-width:600px)":{
//             fontSize:'1rem',
//         },
//              }}>
//             All Rights Reserved &copy; EzExplanation
//         </Typography>

//     </Box>
//     </>
//   )
// }

// export default Footer;

import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        
        <>
        
        <Grid container spacing={2} style={{ backgroundColor: '#333', color: '#fff', padding: '60px 90px' }}>
          
           
            <Grid item xs={12} md={3} sx={{}}>
            <div style={{display:'flex',gap:'20px'}}>

            <img src={logo} alt="" />
            <Typography variant="h4" sx={{fontWeight:'bold'}}>Easy Explanation</Typography>
            </div>
                <Typography sx={{marginTop:'25px',fontSize:'20px'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste tenetur quia aperiam similique maxime, exercitationem, itaque expedita hic iure molestiae distinctio quis vel architecto consequatur in consequuntur, accusantium sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae minus quia aperiam dignissimos ad, alias exercitationem, odit molestiae sit dicta ipsam, unde harum blanditiis iste itaque voluptate ipsa? Harum.
                ipsum dolor sit amet, consectetur adipisicing elit. Iusto ab dolorum fuga soluta, facere error ratione nobis! Ullam officia veritatis tempora. Corporis explicabo velit ipsam nam est, vero quibusdam sequi.
                </Typography>

               
            </Grid>
            {/* <Grid item xs={12} md={1}></Grid> */}
            <Grid item xs={12} md={4} sx={{ marginLeft: '220px' }}>
                
                <Typography variant="h4" sx={{fontWeight:'bold'}}>Quick Links</Typography>
                <div style={{display:'flex',flexDirection:'row',gap:'180px',marginTop:'25px',fontSize:'20px'}}>

                <div style={{lineHeight:'50px'}}>

                
                    <Link href="#">Course</Link>
                    <br />
                    <Link href="#">News</Link>
                    <br />
                    <Link href="#">Notice</Link>
                    <br />
                    <Link href="#">Notice</Link>
                    <br />
                </div>
                <div style={{lineHeight:'50px'}}>

                    <Link href="#">Course</Link>
                    <br />
                    <Link href="#">News</Link>
                    <br />
                    <Link href="#">Notice</Link>
                    <br />
                    <Link href="#">Notice</Link>
                </div>
                </div>
                
            </Grid>
            {/* <Grid item xs={12} md={1}></Grid> */}
            <Grid item xs={12} md={3}sx={{marginLeft:'60px',lineHeight:'20px'}}>
                <Typography variant="h4"sx={{fontWeight:'bold'}}>Contact Us</Typography>
            

                <Typography sx={{marginTop:'25px',fontSize:'20px'}}>
                  infographytechnology9@gmail.com
                </Typography>
                <Typography sx={{marginTop:'25px',fontSize:'20px'}}>
                  +977 981010000
                </Typography>
                <Typography sx={{marginTop:'25px',fontSize:'20px'}}>
                  jwagal,Lalitpur
                </Typography>

                <div style={{display:'flex',gap:'20px',marginTop:'30px'}}>

                <FacebookIcon sx={{ fontSize: 30 }} />

            <GitHubIcon sx={{ fontSize: 30 }}/>
            <LinkedInIcon sx={{ fontSize: 30 }}/>
            <YouTubeIcon sx={{ fontSize: 30}}/>
                </div>
                
            </Grid>
           
          

         

        </Grid>
           <div style={{background:'black',color:'#fff',height:'100px',width:'100%',padding:'40px'}}>
            <Typography Align='center' sx={{fontSize:'20px'}} >
            &copy; {new Date().getFullYear()} Easy Explanation. All Rights Reserved.
            </Typography>

           </div>
        </>
       
    );
};

export default Footer;


