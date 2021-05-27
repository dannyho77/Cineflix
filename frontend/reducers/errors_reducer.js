import { combineReducers } from "redux";
import errors from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: errors
});

export default errorsReducer;