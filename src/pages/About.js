import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing option
    });
  }, []);


  return (
    <Layout>
      <Box 
      sx={{
        my:20,
        textAlign: "center",
        p:2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width: 600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem",
          },
          "& p": {
            fontSize: "1.1rem",
          },
        },
      }}>
        <Typography variant='h4' data-aos="fade-down">
           A Warm Welcome With Every Dish!
        </Typography>
        <p data-aos="fade-right">
          The Home-Style Dining Experience.
          Imagine stepping into a place that feels like home, where the aromas of freshly cooked meals instantly evoke comfort, warmth, and familiarity. "A Warm Welcome with Every Dish" is not just a tagline; it’s the essence of our restaurant. Every bite feels like being in the embrace of family, and each dish is prepared with love and care, just like home-cooked meals.From the moment you walk in, you’re greeted by a friendly smile and the warmth of our inviting decor. It’s a space designed to feel familiar—like your favorite room at home. The wooden tables, soft lighting, and rustic touches create an atmosphere that invites you to sit, relax, and enjoy a meal that feels like it was made just for you.
        </p>
        <br/>
        <p data-aos="fade-left">
        Every corner of the restaurant should feel like a home-away-from-home, where guests come not just to eat, but to relax, share stories, and enjoy a meal that feels like it was made just for them. We invite you to join us, to experience the warmth of home with every dish, and to become a part of our family. Welcome home!
        </p>
      </Box>
    </Layout>
  )
}

export default About
