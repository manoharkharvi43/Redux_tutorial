import { applyMiddleware, createStore } from "redux";
import reducer from "../Reducers/Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const initialstate = [];

const store = createStore(
	reducer,
	initialstate,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
