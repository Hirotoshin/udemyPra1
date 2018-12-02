import { combineReducers } from "redux";
import rootReducer from "./reducer";

export interface IrootState {
  count: number;
}
export default combineReducers({
  count: rootReducer
});
