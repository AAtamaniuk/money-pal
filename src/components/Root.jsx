import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
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
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
}

export default Root;
