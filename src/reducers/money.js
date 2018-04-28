import moneyData from '../testData/money';

const initialState = moneyData;

const money = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return state;
    default:
      return state;
  }
};

export const getTotal = state => state.map(i => i.value).reduce((sum, current) => sum + current, 0);


export default money;
