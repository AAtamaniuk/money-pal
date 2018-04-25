import React from 'react';
// Material UI
import { MuiThemeProvider } from 'material-ui/styles';
// Configs
import theme from '../../config/theme';
// Components
import App from '../App/App';

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

export default Root;
