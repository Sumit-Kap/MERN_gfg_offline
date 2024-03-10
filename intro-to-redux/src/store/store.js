import { applyMiddleware, createStore } from "redux"; // configureStore

import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./reducer/rootReducer";
import { thunk } from "redux-thunk"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// configureStore - redux-thunk, applyMiddleware

export default store;
