import React from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'

import { NavLink} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './images/logo.svg';
import './styles/HeaderStyles.css';
import { useState } from 'react'
const Header = () => {
  const[mobileOpen, setMobileOpen]=useState(false)

   const handleDrawerToggle=()=>{
       setMobileOpen(!mobileOpen)
   }
   const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}} >
     <Typography color={'goldenrod'} varient='h6' component='div' 
     sx={{ flexGrow: 1, my:2 }}>
 <img src={Logo} alt='logo' height={'70'} width="200"/>
              </Typography>
               <Divider/>
              <ul className='mobile-navigation'>
                <li>
                  <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="active" to={'/Menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active"  to={'/Contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
  
   )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton 
             color='inherit' 
             aria-label='open drawer' 
             edge='start' 
             sx={{
              mr: 2,
              display: { sm : 'none' },
            }}
            onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} varient='h6' component='div' 
            sx={{ flexGrow: 1 }}>
            
            <img src={Logo} alt='logo' height={'70'} width="250"/>
            
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/Menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/Contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
            <Drawer varient='temporary' open={mobileOpen}
             onClose={handleDrawerToggle}
             sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper":{
              boxSizing:"border-box",
              width:"240px",
             }}}>
             {drawer}  
            </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  )
}
export default Header
