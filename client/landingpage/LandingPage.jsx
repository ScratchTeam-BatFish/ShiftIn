import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Typography, CssBaseline, ThemeProvider, Card } from '@mui/material';
import NavBar from '../NavBar.jsx';
import ProductHero from './ProductHero.jsx';
import Footer from '../footer.jsx'
import customTheme from '../themes/customTheme.js';

export default function LandingPage() {

    return (
        <>
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Container>
                <ProductHero />
            </Container>
        </ThemeProvider>
        </>
    );
}