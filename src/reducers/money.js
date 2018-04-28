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

export const getTotal = state => state.map(i => i.value).reduce((sum, current) => sum + current, 0);


export default money;
