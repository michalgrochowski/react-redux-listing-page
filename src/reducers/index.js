import { combineReducers } from "redux";
import fetchData from './fetch_data.js';

const rootReducer = combineReducers({
  data: fetchData
});

export default rootReducer;