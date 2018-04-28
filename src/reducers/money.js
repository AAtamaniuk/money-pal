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

export default money;
