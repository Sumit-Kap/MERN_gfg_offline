import { Route, Routes } from "react-router";

import AboutUs from "./Component/Aboutus";
import App from "./App";
import { AppContext } from "./Component/Context/AppContext";
import ContactUs from "./Component/ContactUs";
import { Header } from "./Component/Common/Header";
import { Home } from "./Component/Home";
import { Login } from "./Component/Login";
import React from "react";
import { Signup } from "./Component/Signup";
import { Switch } from "react-router-dom";

/*
React app using CDN
React using create-react-app
Parent-child componnent
Conditional rendering
life cycle of class-based components
react routing
babel
calling API using React componentDidMount
phases of react - mounting, update, unmounting
bidirectional data flow in the react app via using callbacks
*/

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      theme: "light",
    };
  }
  render() {
    const { flag, theme } = this.state;
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              theme: theme === "light" ? "dark" : "light",
            });
          }}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
        <div style={{ backgroundColor: theme === "light" ? "white" : "black", width: '100%', height:'100%' }}>
          <AppContext.Provider value={theme}>
            <Header />
            {/* <div>
              <AboutUs />
              <hr />
              <ContactUs />
              <hr />
            </div> */}
            {/* New way version 6.x.x <Routes>
                <Route element={<Home/>} path="/" />
                <Route element={<AboutUs/>} path="/about-us" />
                <Route element={<ContactUs/>} path="/contact-us" />
                <Route element={<Login/>} path="/login" />
                <Route element={<App/>} path="/sign-up" />
            </Routes> */}
            {/* older way */}
            {/* path.includes("/about-us") */}
            <Routes>
              {/* <a href="javacript:void(0)" onClick={} */}
              <Route element={<Home/>} path="/" />
              <Route element={<AboutUs/>} path="/about-us/:id" />
              <Route element={<ContactUs/>} path="/contact-us" />
              <Route element={<Login/>} path="/login" />
              <Route element={<App/>} path="/sign-up" />
            </Routes>
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
          </AppContext.Provider>
        </div>
      </>
    );
  }
}

export default Root;

// useNavigate - navigation from one route to another route
// useLocation - that will give you information related to pathName, queryParam and hash.
// useParams - This will give you info about parameters that you are passing.

// HOC
// context with class-based
// functional components
// hooks - useState, useEffect
// context setup with hooks
// routing setup with hooks
// redux setup with hooks and class
// redux middleware

// withRouter()// v6

// // Doing any operation that you want to do after first render.
// React.useEffect(() => { }) // on every rerender
// React.useEffect(() => { }, []) // 2 times
// React.useEffect(()=>{},[deps]) // 3rd variation.

// useRef -> RefForwarding

// 
