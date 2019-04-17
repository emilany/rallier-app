import { combineReducers } from 'redux';

import Device from './Device';
import Register from './Register';
import Respond from './Respond';
import Responses from './Responses';

const appReducer = combineReducers({
  device: Device,
  register: Register,
  respond: Respond,
  responses: Responses,
});

export default appReducer;
