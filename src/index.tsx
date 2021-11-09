import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { MoralisDappProvider } from './Moralis/MoralisDappProvider/MoralisDappProvider';
import { useAppDispatch } from './slices/hooks';
import reportWebVitals from './reportWebVitals';
import { store } from './slices/store';
import { theme } from './content/helpers';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MoralisProvider } from 'react-moralis';

// I think that these are set in .env in the root folder. The .env file is in .gitignore, we each need to set our own.
const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

// const APP_ID = 'p9s6FPKleg69I1myRSx8pTDboCsouzoXCj4M5Osw'; // move to env // process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = 'https://42sf9cpyfott.usemoralis.com:2053/server'; //  process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MoralisDappProvider>
      </MoralisProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
