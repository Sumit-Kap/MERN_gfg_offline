import './index.css';

import {BrowserRouter} from "react-router-dom"
import React from 'react'; // default export  // c
import ReactDOM from 'react-dom/client';
import Root from "./Root";
import reportWebVitals from './reportWebVitals';

// named export they are more than 1 in a single file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
