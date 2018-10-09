import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  GET_RESPONSES_LIST, GET_RESPONSES_LIST_SUCCESS, GET_RESPONSES_LIST_FAILURE,
} from '../Actions/Responses';

const initialState = {
  error: '',
  responses: null,
  isLoading: false,
};

const ResponsesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESPONSES_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_RESPONSES_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        responses: action.responses,
        error: '',
      };
    case GET_RESPONSES_LIST_FAILURE:
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
  key: 'responses',
  storage,
  whitelist: ['responses'],
};

export default persistReducer(persistConfig, ResponsesListReducer);
