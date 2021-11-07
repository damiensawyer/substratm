import React from 'react';
import { createTheme } from '@mui/material';

const ORANGE = '#c34e0d';
const DARK_PURPLE = '#260879';
const PINK = '#a02899';
const LIGHT_PURPLE = '#566fe4';
const DARK_BLUE = '#00106b';
const BACKGROUND_PURPLE = '#11004a';
export const BACKGROUND_LIGHT_PURPLE = '#3620ad';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: LIGHT_PURPLE,
            light: ORANGE,
            dark: DARK_BLUE,
        },
        secondary: {
            main: PINK,
            dark: DARK_PURPLE,
            light: ORANGE,
        },
        background: {
            default: BACKGROUND_PURPLE,
            paper: BACKGROUND_LIGHT_PURPLE,
        },
        text: {
            secondary: '#f3eded',
            disabled: 'rgba(193,73,73,0.5)',
            // hint: '#00695c',
        },
        divider: '#7986cb',
        info: {
            main: '#11004a',
            light: '#11004a',
            dark: '#0B0033',
        },
    },
});