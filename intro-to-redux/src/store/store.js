import { createStore } from "redux"; // configureStore
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer);

export default store;