import React from 'react';
import '../componant/style/home.css';
import { Button, Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box className="home-container">
      {/* Video Background */}
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/Ak5n3VDPyBk?autoplay=1&mute=1&loop=1&playlist=Ak5n3VDPyBk"
          title="AMG Tuning Animation"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="hero-overlay">
        <Typography variant="h2" className="hero-title" gutterBottom>
          Unleash the Power of <span className="highlight">AMG</span> Customization
        </Typography>

        <Typography variant="h6" className="hero-subtitle">
          Transform your Mercedes into a masterpiece of performance and luxury.
        </Typography>

        <Button
          variant="contained"
          color="error"
          size="large"
          className="hero-btn"
          onClick={() => (window.location.href = '/about')}
        >
          Explore Our Services
        </Button>
      </div>
    </Box>
  );
}
