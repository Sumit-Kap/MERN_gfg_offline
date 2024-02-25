import { Route, Routes } from "react-router";

import { AboutUs } from "./Component/Aboutus";
import App from "./App";
import { ContactUs } from "./Component/ContactUs";
import { Header } from "./Component/Common/Header";
import { Home } from "./Component/Home";
import { Login } from "./Component/Login";
import React from "react";
import { Signup } from "./Component/Signup";
import { Switch } from "react-router-dom";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }
  render() {
    const { flag } = this.state;
    return (
      <>
            <Header />
            {/* New way version 6.x.x <Routes>
                <Route element={<Home/>} path="/" />
                <Route element={<AboutUs/>} path="/about-us" />
                <Route element={<ContactUs/>} path="/contact-us" />
                <Route element={<Login/>} path="/login" />
                <Route element={<App/>} path="/sign-up" />
            </Routes> */}
            {/* older way */}
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={AboutUs} path="/about-us" exact />
                <Route component={ContactUs} path="/contact-us" exact />
                <Route component={Login} path="/login" exact />
                <Route component={App} path="/sign-up" exact />
            </Switch>
        {/* <button
          onClick={() => {
            this.setState({
              flag: !flag,
            });
          }}
        >
          {flag ? "Hide" : "Show"}
        </button>
        {flag ? <App /> : ""} */}
      </>
    );
  }
}

export default Root;

// withRouter()// v6
