import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import LoginGoogle from "./components/auth/LoginGoogle";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/login">Login</Link>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/auth/google" component={LoginGoogle} />
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
