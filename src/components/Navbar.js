import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for dark mode preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px"
    >
      <Link to="/">
        <img src={Logo} alt='logo' style={{ width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="center"
    
      >
        <Link to="/" style={{ textDecoration: 'none', color: darkMode ? '#FFFFFF' : '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: darkMode ? '#FFFFFF' : '#3A1212',}}>Exercises</a>
        <IconButton aria-label="toggle dark mode" onClick={toggleDarkMode}>
          {darkMode ? (
            <DarkModeIcon fontSize="large" />
          ) : (
            <LightModeIcon fontSize="large" />
          )}
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default Navbar