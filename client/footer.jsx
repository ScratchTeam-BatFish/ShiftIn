import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton, ThemeProvider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import customTheme from './themes/customTheme.js';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const Footer = () => {
  return (
    <ThemeProvider theme={customTheme}>
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-around" padding={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Container sx={{
          display: 'flex',
          flexDirection: 'row',
        }}>
            <ElectricBoltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography variant="h6" color="text.primary" gutterBottom>
              ShiftIn
            </Typography>
            {/* Add your logo component or image here */}
            </Container>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              PRODUCT
            </Typography>
            <Link href="#" color="inherit" display="block">Features</Link>
            <Link href="#" color="inherit" display="block">FAQ</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Careers</Link>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" display="block">Terms of Service</Link>
          </Grid>
   
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" color="inherit" component="a" href={'http://facebook.com'}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="X" color="inherit" component="a" href={'http://twitter.com'}>
              <XIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit" component="a" href={'http://instagram.com'}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default Footer;