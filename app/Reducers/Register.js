import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  REGISTER_NFC, REGISTER_NFC_SUCCESS, REGISTER_NFC_FAILURE,
} from '../Actions/Register';

const initialState = {
  error: '',
  status: 0,
  isLoading: false,
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NFC:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_NFC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        error: '',
      };
    case REGISTER_NFC_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'register',
  storage,
  whitelist: ['status'],
};

export default persistReducer(persistConfig, RegisterReducer);
