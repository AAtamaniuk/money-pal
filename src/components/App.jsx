import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
// Components
import DashboardPage from "./DashboardPage";
import Header from "./Header";
import AddMoneyPage from "./AddMoneyPage";
import EditMoneyPage from "./EditMoneyPage";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header title="Money Pal" />
      <Link to="/create">Create</Link>
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/create" component={AddMoneyPage} />
        <Route path="/edit" component={EditMoneyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
