import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// import routes
import { routeList } from "./components/routes/routes";
import ImpactInvestorPage from "./components/impact-investor";

// import components
import Navigation from "./components/common/navigation";
import { makeStyles, Theme } from "@material-ui/core";

function App() {
  const appClasses = appStyles();
  return (
    <div className={appClasses.root}>
      <Router>
        <Navigation routes={routeList} />
        <Switch>
          {routeList.map((route) => (
            <Route path={route.path} component={route.page} exact />
          ))}
          <Redirect to="/impact-investor" from="/" exact>
            <Route
              path="/impact-investor"
              component={() => <ImpactInvestorPage />}
            />
          </Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const appStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
  },
}));
