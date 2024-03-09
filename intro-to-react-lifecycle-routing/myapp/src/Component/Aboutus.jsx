import { useLocation, useNavigate, useParams } from "react-router-dom";

import { AppContext } from "./Context/AppContext";
import React from "react";
import withCounter from "./HOC/withCounter";
const AboutUs = (props) => {
  const { value,   handleClick } = props;
    const theme = React.useContext(AppContext);
    const navigate = useNavigate(); 
    const location = useLocation();
    const queryParams = useParams();
    console.log("use params",location,queryParams);
    // console.log("print theme",theme);
  return (
    <div style={{ color: theme  === "dark" ? "white" : "black" }}>
      <div>Value is {value}</div>
      <hr />
          <button onClick={handleClick}>Increment on click</button>
          <button onClick={() => { navigate("/login") }}>Login</button>
    </div>
  );
};

export default withCounter(AboutUs);
// Auth, theme, 