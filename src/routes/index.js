import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ContactsList from "pages/ContactsList";
import Create from "pages/Create";
import NotFound from "pages/NotFound";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ContactsList} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/:contato_id/edit" component={Create} />
        <Route exact path="/404" component={NotFound} />
        <Route exact path="*" component={() => <Redirect to="/404" />} />
      </Switch>
    </Router>
  );
}
