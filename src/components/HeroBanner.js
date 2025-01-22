import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import HeroBannerNewImage from '../assets/images/john-fornander-TAZoUmDqzXk-unsplash.jpg';


const HeroBanner = ({ darkMode }) => {
  return (
    <Box sx={{
        mt: { lg:'212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Exercise DB
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'} }}
        mb="23px"
        >
            Find ways to push yourself!<br /> Get in shape effectively.
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Find exercises that suit you the most!
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: 'ff2625', padding: '10px'}}>Explore Exercises</Button>
        <Typography
            fontWeight={600}
            color="#ff2625"
            sx={{
                opacity:0.1,
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize="200px"
        >Exercise</Typography>
        <img src={HeroBannerNewImage} alt="banner" className="hero-banner-img" /> 
    </Box>
  )
}

export default HeroBanner