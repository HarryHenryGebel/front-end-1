import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import hostReducer from "./reducers/hostReducer";

const store = createStore(hostReducer, applyMiddleware(thunk));
export default store;
