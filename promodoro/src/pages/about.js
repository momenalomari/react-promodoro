import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Button,
  Avatar,
  Stack,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  const theme = useTheme();

  const features = [
    {
      title: 'Quality',
      desc: 'Top-tier AMG-grade parts and rigorous QC for every product.',
      img: 'https://i.pinimg.com/1200x/37/44/d3/3744d357ec94b1552f45f81b44153fae.jpg',
    },
    {
      title: 'Innovation',
      desc: 'Cutting-edge designs and performance upgrades that push limits.',
      img: 'https://i.pinimg.com/1200x/56/f1/d9/56f1d9d81d5d6fec123a89b259773a77.jpg',
    },
    {
      title: 'Support',
      desc: 'Fast, friendly support and installation guidance for every customer.',
      img: 'https://i.pinimg.com/1200x/b0/2e/5c/b02e5c2d92ae7d59c1851f5b7df76be3.jpg',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Page header */}
      <Box
        component={motion.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{ textAlign: 'center', mb: 6 }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 800, letterSpacing: 1, mb: 1 }}
        >
          About Us
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          We transform Mercedes into balanced works of performance and luxury —
          engineered parts, thoughtful design, and service you can trust.
        </Typography>
      </Box>

      {/* Hero section: image + intro */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card sx={{ borderRadius: 3, overflow: 'hidden' }} elevation={6}>
              <CardMedia
                component="img"
                image="https://i.pinimg.com/1200x/79/f7/bd/79f7bd449c8c582c10a1ca54239ffd5a.jpg"
                alt="AMG performance parts"
                loading="lazy"
                sx={{ height: { xs: 220, md: 360 }, objectFit: 'cover' }}
              />
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ pr: { md: 4 } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Welcome to the AMG Garage
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              We are a team of passionate engineers and car lovers focused on
              delivering high-quality modification parts and tuning services.
              Whether you want subtle luxury or full track-focused performance,
              we design solutions that fit your goals and maintain reliability.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                component={Link}
                to="/services"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#e50914',
                  '&:hover': { bgcolor: '#b70a10' },
                  boxShadow: '0 6px 18px rgba(229,9,20,0.18)',
                }}
              >
                Our Services
              </Button>

              <Button component={Link} to="/contact" variant="outlined" size="large">
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      {/* Values / Features */}
      <Box sx={{ mt: { xs: 6, md: 10 } }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 4 }}>
          Our Values
        </Typography>

        <Grid container spacing={3}>
          {features.map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <motion.div whileHover={{ translateY: -6 }}>
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    loading="lazy"
                    sx={{ height: 160, objectFit: 'cover' }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team + CTA */}
      <Box sx={{ mt: { xs: 6, md: 10 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
              Meet the Team
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Small but highly-focused team of mechanics, fabricators and
              design engineers dedicated to creating reliable upgrades.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Avatar alt="Lead Engineer" src="https://i.pravatar.cc/100?img=32" />
              <Avatar alt="Fabricator" src="https://i.pravatar.cc/100?img=12" />
              <Avatar alt="Customer Support" src="https://i.pravatar.cc/100?img=5" />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Ready to upgrade?
              </Typography>

              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#ff8b52',
                  '&:hover': { bgcolor: '#ff7a2a' },
                }}
              >
                Book a Consultation
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Small footer spacer */}
      <Box sx={{ height: 48 }} />
    </Container>
  );
}
