
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';

function Footer() {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
      {/* <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} component={Link} to="/contact" />
      <BottomNavigationAction label="About" icon={<InfoIcon />} component={Link} to="/about" /> */}
    </BottomNavigation>
  );
}

export default Footer;
