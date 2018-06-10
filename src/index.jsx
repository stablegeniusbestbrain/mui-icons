import React from 'react';
import { render } from 'react-dom';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import './style.css';

import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const rootEl = document.createElement('div');
rootEl.setAttribute('id', 'app');
document.body.appendChild(rootEl);

const renderComponent = () =>
  render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    rootEl,
  );

renderComponent();
