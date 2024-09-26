import React,{useState,useEffect} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

   useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing option
    });
  }, []);

  // handle menu click
  const handlerDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  // menu drawer
  const drawer = (
    <Box onClick={handlerDrawerToggle} sx={{textAlign:'center', bgcolor: '#222',  // Dark background for a modern look
    color: 'white',
    height: '100%',
    padding: '20px'}}>
      <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow: 1, my:2}}>
            <FastfoodIcon />
            SHIV FOOD
            </Typography>
            <Divider sx={{ bgcolor: 'goldenrod',height:"2px" }}/>
              <ul className='mobile-navigation' style={{ listStyle: 'none', padding: 0}}>
                <li data-aos="fade-right">
                  <HomeIcon sx={{ color: 'goldenrod',
                   marginRight: '10px'}}/>
                  <Link to={'/'}>Home</Link>
                </li>
                <li data-aos="fade-right" data-aos-delay="100">
                  <MenuBookIcon sx={{ color: 'goldenrod',
                   marginRight: '10px'}}/>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li data-aos="fade-right" data-aos-delay="200">
                  <InfoIcon sx={{ color: 'goldenrod',
                   marginRight: '10px'}}/>
                  <Link to={'/about'}>About</Link>
                </li>
                <li data-aos="fade-right" data-aos-delay="300">
                  <CallIcon sx={{ color: 'goldenrod',
                   marginRight: '10px'}}/>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor: "black"}}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:'none'}}}onClick={handlerDrawerToggle} data-aos="fade-down">
               <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow: 1}} data-aos="fade-down">
            <FastfoodIcon />
            SHIV FOOD
            </Typography>
            <Box sx={{display:{xs:"none", sm:"block"}}}>
              <ul className='navigation-menu'>
                <li data-aos="fade-up">
                  <Link to={'/'}>Home</Link>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <Link to={'/about'}>About</Link>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant='temporary' open={mobileOpen} onClose={handlerDrawerToggle} sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper":{boxSizing:'border-box',width:"240px",},}}>
              {drawer}
            </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header
