import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import applianceReducer from "./appliance/applianceReducer";
import electronicReducer from './electronic/electronicReducer';

export const ELECTRONIC_STATE = "electronic";
export const APPLIANCE_STATE = "appliance";

const rootReducer = combineReducers( { [ELECTRONIC_STATE] : electronicReducer, [APPLIANCE_STATE] : applianceReducer } );

const store = createStore( rootReducer, applyMiddleware( thunk ) );

export default store;