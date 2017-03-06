import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import appReducer from './containers/App/reducer';
import RiskDropDownReducer from './components/RiskDropDown/reducer';
import RiskTypeInputReducer from './containers/RiskTypeInput/reducer'

const rootReducer = combineReducers({
  form: formReducer,
  appReducer,
  RiskDropDownReducer,
  RiskTypeInputReducer
});

export default rootReducer;
