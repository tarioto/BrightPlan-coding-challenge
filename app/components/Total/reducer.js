const initialState = {
  "gold": 0,
  "bonds": '',
  "stocks": '',
  "real estate": '',
  "mutual funds": ''
};
export default function RiskTypeInputReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        gold: action.value
      };

    default:
      return state;
  }
}
