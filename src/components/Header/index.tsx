
import React, { useState } from 'react';
import NavigationBar from '../NavBar';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Banner from '../Banner';
import './styles.css';

function Header() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: 'Home', link: '/' },
        // { label: 'Contact Us', link: '/contact' },
        // { label: 'About Us', link: '/about' },
        // { label: 'Our Values', link: '/values' },
        // { label: 'Our Team', link: '/team' },
        // Add more menu items as needed
    ];

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Splay Tech
                    </Link>
                </Typography>



                {/* Desktop navigation */}
                <List sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                    {menuItems.map((item) => (
                        <ListItem key={item.label} component={Link} 
                        to={item.link} 
                        className='link'>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>

                {/* Mobile navigation drawer */}
                <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.label} component={Link} to={item.link} 
                            onClick={toggleDrawer(false)}
                            className='drawerLink'>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Toolbar>
            <Banner />
        </AppBar>
    );
}

export default Header;
