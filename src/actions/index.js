import shortid from "shortid";
import * as types from "../constants/actionTypes";

const addMoney = (name, category, value) => ({
  type: types.ADD_MONEY,
  id: shortid.generate(),
  category,
  name,
  date: Date.now(),
  value: category === "income" ? Number(value) : -Number(value)
});

export default addMoney;
