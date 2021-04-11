import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import LoginGoogle from "./components/auth/LoginGoogle";
import LoginFacebook from "./components/auth/LoginFacebook";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          {/* <Link to="/login">Login</Link>
          <Link to="/sign-up">Sign up</Link> */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/auth/google" component={LoginGoogle} />
            <Route exact path="/auth/facebook" component={LoginFacebook} />
          </Switch>
        </Router>{" "}
      </Layout>
    </div>
  );
}

export default App;
