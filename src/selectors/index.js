import { createSelector } from "reselect";
import * as R from "ramda";

// Ramda sandbox
// Helpers

const getAmounts = i => i.amount;
const getCategories = i => i.category;

const getSum = array => R.sum(R.map(getAmounts, array));
const getIncomeSum = array =>
  getSum(R.filter(i => i.category === "income", array));
const getCostsSum = array =>
  getSum(R.filter(i => i.category !== "income", array));
const getTotal = array => (getIncomeSum(array) - getCostsSum(array)) / 100;

const getCategoriesList = array => R.uniq(R.map(getCategories, array));
const getCostCategoriesOnly = array =>
  R.filter(i => i !== "income", getCategoriesList(array));

const filterByCategory = (array, category) =>
  R.filter(i => i.category === category, array);
const getSumByCategory = (array, category) =>
  getSum(filterByCategory(array, category));

// Selectors

export const getMoney = state => state.money;

export const findMoneyRecordById = (state, id) =>
  state.money.find(i => i.id === id);

export const getTotalMoney = createSelector(getMoney, money => getTotal(money));

export const getDataSetByCosts = createSelector(getMoney, money => {
  const costsCategories = getCostCategoriesOnly(money);
  return costsCategories.map(i => getSumByCategory(money, i));
});

export const getDataSetByType = createSelector(getMoney, money => {
  const incomeSum = getIncomeSum(money);
  const costsSum = Math.abs(getCostsSum(money));
  return [incomeSum, costsSum];
});
