import shortid from "shortid";
import * as types from "../constants/actionTypes";

const addMoney = (name, category, amount) => ({
  type: types.ADD_MONEY,
  id: shortid.generate(),
  category,
  name,
  date: Date.now(),
  amount: category === "income" ? Number(amount) : -Number(amount)
});

export default addMoney;
