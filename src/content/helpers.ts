import {createTheme} from "@mui/material";

export const EMPTY_STRING = '';
export const NA = 'N/A';


export const palette = {
    white: '#ffffff',
    light: '#fafafa',
    shadow: '#ebebeb',
    headerbg: '#8e8b8b',
    bgPrimary: '#0052cc',
    bgSecondary: '#dae4f5',
    bgCanvas: 'rgba(0, 0, 0, 0.04)',
    bgDisabled: 'rgba(0, 0, 0, 0.12)',
    btnPrimary: '#a2a0a0',
    btnHover: '#303f9f',
    btnSecondary: '#7986cb',
    btnSecondaryHover: '#5c6bc0',
    btnFlat: 'rgba(0, 0, 0, 0.23)',
    btnFlatHover: 'rgba(0, 0, 0, 0.04)',
    btnDisabled: 'rgba(0, 0, 0, 0.26)',
    warning: '#ff9800',
    success: '#4caf50',
    danger: '#a2a0a0',
    info: '#e8f4fd',
    divider: 'rgba(0, 0, 0, 0.12)',
    textPrimary: 'rgba(0, 0, 0, 0.9)',
    textSecondary: 'rgba(0, 0, 0, 0.7)',
    textTitle: '#303f9f',
    editpencil: '#a2a0a0',
    deleteicons: '#a2a0a0',
}


const ORANGE = '#c34e0d';
const DARK_PURPLE = '#260879';
const PINK = '#a02899';
const LIGHT_PURPLE = '#566fe4';
const DARK_BLUE = '#00106b';
const BACKGROUND_PURPLE = '#11004a';
export const BACKGROUND_LIGHT_PURPLE = '#3620ad';

// https://mui.com/customization/theming/#createtheme-options-args-theme
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
            paper: LIGHT_PURPLE,
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