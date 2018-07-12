import { createSelector } from "reselect";
import * as R from "ramda";

// Ramda sandbox

// Helpers

const getAmounts = i => i.amount;

const getCategories = i => i.category;

const getCategoriesList = array => R.uniq(R.map(getCategories, array));

const getCostCategoriesOnly = array =>
  R.filter(i => i !== "income", getCategoriesList(array));

const getTotal = array => R.sum(R.map(getAmounts, array));

const filterByCategory = (array, category) =>
  R.filter(i => i.category === category, array);

const getSumByCategory = (array, category) =>
  getTotal(filterByCategory(array, category));

const getIcomeSum = array =>
  getTotal(R.filter(i => i.category === "income", array));

const getCostsSum = array =>
  getTotal(R.filter(i => i.category !== "income", array));

// Selectors

export const getMoney = state => state.money;

export const getTotalMoney = createSelector(getMoney, money => getTotal(money));

export const getDataSetByCosts = createSelector(getMoney, money => {
  const costsCategories = getCostCategoriesOnly(money);
  return costsCategories.map(i => getSumByCategory(money, i));
});

export const getDataSetByType = createSelector(getMoney, money => {
  const incomeSum = getIcomeSum(money);
  const costsSum = Math.abs(getCostsSum(money));
  return [incomeSum, costsSum];
});
