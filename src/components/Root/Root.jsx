import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Material UI
import { MuiThemeProvider } from 'material-ui/styles';
// Configs
import theme from '../../config/theme';
// Redux
import rootReducer from '../../reducers';
// Components
import App from '../App/App';

const store = createStore(rootReducer);

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
