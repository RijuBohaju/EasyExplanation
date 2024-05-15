import React ,{useState} from 'react'
import logo from "../../images/logo.png"
import { AppBar, Box, Button, Divider, Drawer, IconButton, Toolbar, Typography, textFieldClasses } from "@mui/material"
import {Link} from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header=() => {
    const [mobileOpen, setMobileOpen]= useState(false);
    //handle menu click
    const handleDawerToggle=() =>{
        setMobileOpen(!mobileOpen)
    }
    //dropdown menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    // const handleMouseEnter = () => {
    //     setAnchorEl(true);
    // };

    // const handleMouseLeave = () => {
    //     setAnchorEl(false);
    // };

    //menu drawer
    const drawer=(
        <Box onClick={handleDawerToggle} sx={{textAlign:'centerr'}}>
            <Typography
            color='black'
            variant='h6'
            component='div'
            sx={{flexGrow:1, my:2, mx:3}}>
                <img  src={logo} alt="" />
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
                        <Button
                         id="basic-button"
                         aria-controls={open ? 'basic-menu' : undefined}
                         aria-haspopup="true"
                         aria-expanded={open ? 'true' : undefined}
                         onClick={handleClick}
                         endIcon={<KeyboardArrowDownIcon />}
                        //  onMouseEnter={handleMouseEnter}
                        //  onMouseLeave={handleMouseLeave}
                         style={{ color: 'black' }}>
                            More
                           
                            </Button>
                            <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}>
                          <MenuItem onClick={handleClose}>News</MenuItem>
                          <MenuItem onClick={handleClose}>NEC License Exam</MenuItem>
                          <MenuItem onClick={handleClose}>Engineering Project</MenuItem>
                          <MenuItem onClick={handleClose}>Notices</MenuItem>
                          <MenuItem onClick={handleClose}>Youtube</MenuItem>


                            </Menu>
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
                    <li>
                        <Button
                         id="basic-button"
                         aria-controls={open ? 'basic-menu' : undefined}
                         aria-haspopup="true"
                         aria-expanded={open ? 'true' : undefined}
                         onClick={handleClick}
                         endIcon={<KeyboardArrowDownIcon />}
                        //  onMouseEnter={handleMouseEnter}
                        //  onMouseLeave={handleMouseLeave}
                         style={{ color: 'black' }}>
                            More
                           
                            </Button>
                            <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
        // MenuListProps={{
        //     vertical: 'bottom',
        //     horizontal: 'left',
        // }}
        // transformOrigin={{
        //     vertical: 'top',
        //     horizontal: 'left',
        // }}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <MenuItem onClick={handleClose}>News</MenuItem>
        <MenuItem onClick={handleClose}>NEC License Exam</MenuItem>
        <MenuItem onClick={handleClose}>Engineering Project</MenuItem>
        <MenuItem onClick={handleClose}>Notices</MenuItem>
        <MenuItem onClick={handleClose}>Youtube</MenuItem>
      </Menu>
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
