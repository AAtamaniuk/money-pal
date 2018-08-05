import shortid from "shortid";
import * as types from "../constants/actionTypes";

const addMoneyRecord = (description, category, amount, createdAt) => ({
  type: types.ADD_MONEY_RECORD,
  moneyRecord: {
    id: shortid.generate(),
    category,
    description,
    createdAt,
    amount: category === "income" ? Number(amount) : -Number(amount)
  }
});

const removeMoneyRecord = id => ({
  type: types.REMOVE_MONEY_RECORD,
  id
});

const editMoneyRecord = (id, updates) => ({
  type: types.EDIT_MONEY_RECORD,
  id,
  updates
});

export { addMoneyRecord, removeMoneyRecord, editMoneyRecord };
