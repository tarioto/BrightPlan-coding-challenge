import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import RiskDropDownReducer from './components/RiskDropDown/reducer';
import RiskTypeInputReducer from './containers/RiskTypeInput/reducer'

const rootReducer = combineReducers({
  form: formReducer,
  RiskDropDownReducer,
  RiskTypeInputReducer
});

export default rootReducer;
