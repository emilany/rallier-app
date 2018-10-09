import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  SYNC_DEVICE, SYNC_DEVICE_SUCCESS, SYNC_DEVICE_FAILURE,
} from '../Actions/Device';
import { DeviceSync } from '../Constants/Types';

const initialState = {
  deviceSync: DeviceSync,
  error: '',
  isSynced: false,
  isAuthenticating: false,
};

const DeviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SYNC_DEVICE:
      return {
        ...state,
        isAuthenticating: true,
      };
    case SYNC_DEVICE_SUCCESS:
      return {
        ...state,
        isSynced: true,
        isAuthenticating: false,
        deviceSync: action.deviceSync,
        error: '',
      };
    case SYNC_DEVICE_FAILURE:
      return {
        ...state,
        isSynced: false,
        isAuthenticating: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'device',
  storage,
  whitelist: ['deviceSync', 'isSynced'],
};

export default persistReducer(persistConfig, DeviceReducer);
