import { ADD_MONEY } from '../constants/actionTypes';
import moneyData from '../testData/money';

const initialState = moneyData;

export const moneyItem = (state, action) => {
  switch (action.type) {
    case ADD_MONEY: {
      return {
        id: action.id,
        category: action.category,
        name: action.name,
        date: action.date,
        value: action.value,
      };
    }

    default:
      return state;
  }
};


const money = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return [
        moneyItem(null, action),
        ...state,
      ];

    default:
      return state;
  }
};

// TODO rewrite this stupid functions

export const getTotal = state => state.map(i => i.value).reduce((sum, current) => sum + current, 0);

export const getSumByType = (array, category) => {
  const filteredArr = array.filter(i => i.category === category);
  return getTotal(filteredArr);
};

export const getDataSetByCosts = (array) => {
  const typesSum = [];
  typesSum.push(getSumByType(array, 'entertainment'));
  typesSum.push(getSumByType(array, 'food'));
  typesSum.push(getSumByType(array, 'shopping'));
  typesSum.push(getSumByType(array, 'others'));
  return typesSum;
};

export const getDataSetByCategory = (array) => {
  const categorySum = [];
  const incomeSum = getTotal(array.filter(i => i.category === 'income'));
  const costsSum = getTotal(array.filter(i => i.category !== 'income'));
  categorySum.push(incomeSum);
  categorySum.push(Math.abs(costsSum));
  return categorySum;
};

export default money;
