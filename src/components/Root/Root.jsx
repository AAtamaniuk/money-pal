import React from 'react';
import { Provider } from 'react-redux';
// Material UI
import { MuiThemeProvider } from '@material-ui/core/styles';
// Configs
import theme from '../../config/theme';
// Redux
import store from '../../store';
// Components
import App from '../App/App';

function Root() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
}

export default Root;
