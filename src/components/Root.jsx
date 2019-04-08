import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
// Material UI
import { MuiThemeProvider } from "@material-ui/core/styles";
// Configs
import theme from "../config/theme";
// Redux
import store from "../store/index";
// Components
import App from "./App";

function Root() {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <App />
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
        </Router>
      </Provider>
    </StrictMode>
  );
}

export default Root;
