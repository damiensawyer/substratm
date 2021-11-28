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
import { BrowserRouter } from 'react-router-dom';

// These are read from the .env file. 
// const APP_ID = (process.env.REACT_APP_MORALIS_APPLICATION_ID as string); 
// const SERVER_URL = (process.env.REACT_APP_MORALIS_SERVER_URL as string);

/**
 Ed and Lilly, the code above successully reads the .env file on my machine... but I can't get it working on the server (we're we're reading from the environment variables in linux?)
 I read a stack of stuff like
 https://dev.to/jam3/managing-env-variables-for-provisional-builds-h37
 https://create-react-app.dev/docs/adding-custom-environment-variables/
 https://tacomanator.medium.com/environments-with-create-react-app-7b645312c09d
 
 .... but am still stuck. Perhaps we can come back to it or just hard code it. 
 The site is hosted via nginx on Debian. 
 */

// Rinkby
const APP_ID = 'DmPC1YInapx8x0Uvpqrjs39yD3tDQrFmrZLojihU'; 
const SERVER_URL = 'https://sq3oo5ayiubc.usemoralis.com:2053/server';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <App />
            </BrowserRouter>
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
