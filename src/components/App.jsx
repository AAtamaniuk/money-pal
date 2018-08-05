import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
// Components
import DashboardPage from "./DashboardPage";
import Header from "./Header";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header title="Money Pal" />
      <Switch>
        <Route path="/" exact component={DashboardPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
