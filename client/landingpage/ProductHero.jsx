import * as React from 'react';
import { Button, Typography, Box } from '@mui/material';
import ProductHeroLayout from './ProductHeroLayout.jsx';

const backgroundImage =
  'https://images.unsplash.com/photo-1494346480775-936a9f0d0877?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      {/* <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      /> */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Plan your workdays tastefully!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Does your schedule need some ShiftIn?
      </Typography>
      <Box sx={{ gap: 2 }}>
        <Button
            color="secondary"
            variant="contained"
            size="large"
            component="a"
            href="/register"
            sx={{ minWidth: 200, m: 2 }}
        >
            Register
        </Button>
        <Button
            color="primary"
            variant="contained"
            size="large"
            component="a"
            href="/login"
            sx={{ minWidth: 200 }}
        >
            Login
        </Button>
      </Box>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}