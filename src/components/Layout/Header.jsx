import React ,{useState} from 'react'
import logo from "../../assets/react.svg"
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, textFieldClasses } from "@mui/material"
import {Link} from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header=() => {
    const [mobileOpen, setMobileOpen]= useState(false);
    //handle menu click
    const handleDawerToggle=() =>{
        setMobileOpen(!mobileOpen)
    }
    //menu drawer
    const drawer=(
        <Box onClick={handleDawerToggle} sx={{textAlign:'centerr'}}>
            <Typography
            color='black'
            variant='h6'
            component='div'
            sx={{flexGrow:1, my:2, mx:2}}>
                <img src={logo} alt="" />
                EasyExplanation
            </Typography>
            <Divider/>
                <ul className='mobile-navigation' >
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/courses'}>Courses</Link>
                    </li>
                    <li>
                        <Link to={'/More'}>More</Link>

                    
                    </li>
                    
                </ul>          
        </Box>
    )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:"white"}}>
            <Toolbar>
                <IconButton 
                color="black"
                aria-label="open drawer" 
                edge="start" 
                sx={{
                    mr: 2, 
                    display:{sm:'none'},}}
                    onClick={handleDawerToggle}>
                    <MenuIcon/>
                </IconButton>
            <Typography
            color='black'
            variant='h6'
            component='div'
            sx={{flexGrow:1}}>
                <img src={logo} alt="" />
                EasyExplanation
            </Typography>
            <Box sx={{display:{xs:'none', sm:'block'}}}>
                <ul className='navigation-menu'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/courses'}>Courses</Link>
                    </li>
                </ul>
            </Box>
            </Toolbar>
        </AppBar>
        <Box component='nav'>
            <Drawer 
            variant="temporary" 
            open={mobileOpen} 
            onClose={handleDawerToggle}
            sx={{display:{xs:'block',sm:'none'},
            "& .MuiDrawer-paper":{
                boxSizing :"border-box",
                width:'240px',
            },
            }}>
             {drawer}   
            </Drawer>
        </Box>
        <Box >
        <Toolbar />
        </Box>      
      </Box>
    </>
  )
}

export default Header
