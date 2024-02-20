import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import ProductHero from './ProductHero.jsx';
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