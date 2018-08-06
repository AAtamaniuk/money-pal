import React from "react";
import { Provider } from "react-redux";
import moment from "moment";

import { BrowserRouter as Router } from "react-router-dom";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
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
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
            <App />
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
}

export default Root;
