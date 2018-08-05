import * as types from "../constants/actionTypes";
import money from "../testData/money";

const initialState = money;

export const moneyRecords = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MONEY_RECORD:
      return [...state, action.moneyRecord];

    case types.REMOVE_MONEY_RECORD:
      return state.filter(moneyRecord => moneyRecord.id !== action.id);

    case types.EDIT_MONEY_RECORD:
      return state.map(moneyRecord => {
        if (moneyRecord.id === action.id)
          return { ...moneyRecord, ...action.updates };
        return moneyRecord;
      });

    default:
      return state;
  }
};

export default moneyRecords;
