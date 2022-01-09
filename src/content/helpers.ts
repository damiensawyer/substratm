import { createTheme } from '@mui/material';

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
};

const ORANGE = '#c34e0d';
const DARK_PURPLE = '#260879';
const PINK = '#a02899';
const PURPLE = '#5221E6';
const DARK_BLUE = '#00106b';
const BACKGROUND_PURPLE = '#11004a';
export const BACKGROUND_LIGHT_PURPLE = '#3620ad';
const LIGHT_GREY = '#DEECF9';
const DARK_GREY = '#C7E0F4';
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: PURPLE,
      light: ORANGE,
      dark: DARK_BLUE,
    },
    secondary: {
      main: LIGHT_GREY,
      dark: DARK_GREY,
      light: ORANGE,
    },
    background: {
      default: '#000000',
      paper: PURPLE,
    },
    text: {
      secondary: '#FFFFFF',
      disabled: 'DARK_GREY',
    },
    divider: '#7986cb',
    info: {
      main: '#11004a',
      light: '#11004a',
      dark: '#0B0033',
    },
  },
});
