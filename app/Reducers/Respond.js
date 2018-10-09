import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  RESPOND_NFC, RESPOND_NFC_SUCCESS, RESPOND_NFC_FAILURE,
} from '../Actions/Respond';

const initialState = {
  error: '',
  status: 0,
  isLoading: false,
};

const RespondReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESPOND_NFC:
      return {
        ...state,
        isLoading: true,
      };
    case RESPOND_NFC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        error: '',
      };
    case RESPOND_NFC_FAILURE:
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
  key: 'respond',
  storage,
  whitelist: ['status'],
};

export default persistReducer(persistConfig, RespondReducer);
