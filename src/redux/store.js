import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import applianceReducer from "./appliance/applianceReducer";
import electronicReducer from './electronic/electronicReducer';
import commentsReducer from './comments/commentsReducer';
import { composeWithDevTools } from "redux-devtools-extension";

export const ELECTRONIC_STATE = "electronic";
export const APPLIANCE_STATE = "appliance";
export const COMMENTS_STATE = "comments";

const rootReducer = combineReducers( { 
	[ELECTRONIC_STATE] : electronicReducer,
	[APPLIANCE_STATE] : applianceReducer,
	[COMMENTS_STATE] : commentsReducer
} );

// Added manually connection to Redux Devtools add on
// import { applyMiddleware, combineReducers, createStore, compose } from "redux";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore( rootReducer, composeEnhancers( applyMiddleware( thunk ) ) );

const store = createStore( rootReducer, composeWithDevTools( applyMiddleware( thunk ) ) );

export default store;