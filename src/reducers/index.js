import { combineReducers } from "redux";
import moneyRecords from "./moneyRecords";

export default combineReducers({
  money: moneyRecords
});
