import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import applianceReducer from "./appliance/applianceReducer";
import electronicReducer from './electronic/electronicReducer';
import commentsReducer from './comments/commentsReducer';

export const ELECTRONIC_STATE = "electronic";
export const APPLIANCE_STATE = "appliance";
export const COMMENTS_STATE = "comments";

const rootReducer = combineReducers( { 
	[ELECTRONIC_STATE] : electronicReducer,
	[APPLIANCE_STATE] : applianceReducer,
	[COMMENTS_STATE] : commentsReducer
} );

const store = createStore( rootReducer, applyMiddleware( thunk ) );

export default store;