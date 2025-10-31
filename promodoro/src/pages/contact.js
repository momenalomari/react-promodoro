import * as React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Paper,
  Stack,
  Fade,
} from '@mui/material';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';

export default function Contact() {
  return (
    <Fade in timeout={800}>
      <Box
        sx={{
          minHeight: '100vh',
          py: 10,
          background:
            'linear-gradient(135deg, #000000 0%, #1b1b1b 40%, #3c3c3c 100%)',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          {/* Title */}
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: '#fff',
              mb: 6,
              textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
              letterSpacing: 1.2,
            }}
          >
            Contact AMG Custom Garage
          </Typography>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={10}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 10px 25px rgba(255,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    color: '#d32f2f',
                    textTransform: 'uppercase',
                  }}
                >
                  Send Us a Message
                </Typography>

                <Box component="form">
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={5}
                    sx={{ mb: 4 }}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: '#d32f2f',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1rem',
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(211,47,47,0.5)',
                      '&:hover': {
                        bgcolor: '#b71c1c',
                        boxShadow: '0 6px 25px rgba(211,47,47,0.7)',
                        transform: 'scale(1.04)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={10}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 10px 25px rgba(255,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    mb: 4,
                    color: '#d32f2f',
                    textTransform: 'uppercase',
                  }}
                >
                  Contact Information
                </Typography>

                <Stack spacing={2}>
                  <Typography variant="body1">
                    <LocationOn sx={{ color: '#d32f2f', mr: 1 }} />
                    <strong>Address:</strong> 123 AMG Street, Car City, Country
                  </Typography>

                  <Typography variant="body1">
                    <Phone sx={{ color: '#d32f2f', mr: 1 }} />
                    <strong>Phone:</strong> +123 456 7890
                  </Typography>

                  <Typography variant="body1">
                    <Email sx={{ color: '#d32f2f', mr: 1 }} />
                    <strong>Email:</strong> info@amgparts.com
                  </Typography>

                  <Typography variant="body1">
                    <AccessTime sx={{ color: '#d32f2f', mr: 1 }} />
                    <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
                  </Typography>
                </Stack>

                {/* Optional Google Map */}
                {/* <Box sx={{ mt: 4, borderRadius: 3, overflow: 'hidden' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location"
                  ></iframe>
                </Box> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
}
