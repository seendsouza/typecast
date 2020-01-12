import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import tweetsReducer from "./tweetsReducer";
export default combineReducers({ dashboard: dashboardReducer, tweets: tweetsReducer});