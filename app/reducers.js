import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import RiskDropDownReducer from './components/RiskDropDown/reducer';


const rootReducer = combineReducers({
  appReducer,
  RiskDropDownReducer,
});

export default rootReducer;
