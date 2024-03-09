import { AppContext } from "./Context/AppContext";
import React from "react";
import withCounter from "./HOC/withCounter";
const ContactUs = (props) => {
    const { handleClick, value } = props;

    return (
        <AppContext.Consumer>
            {(theme) => {
                <div style={{ color: theme === 'dark' ? 'white' : 'black'}}>
                    {" "}
                    <div>Value is {value}</div>
                    <button onMouseOver={handleClick}>Increment on hover</button>
                </div>
            }
            }
            </AppContext.Consumer>
  );
};

export default withCounter(ContactUs);
