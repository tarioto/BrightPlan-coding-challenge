const initialState = {
  risk: 'Pick your risk number',
};

export default function RiskDropDownReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_RISK':
      return {
        ...state,
        risk: action.risk
      };

    default:
      return state;
  }
}
