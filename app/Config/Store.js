import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// wraps the app's root reducer
const reducer = persistReducer(persistConfig, rootReducer);
// create store
const store = createStore(reducer, undefined, compose(applyMiddleware(...middleware)));
// ensures redux state is saved to persistent storage when changes occur
// const persistor = persistStore(store, () => {
//   console.log('restored');
// });

const configureStore = () => ({ store });

sagaMiddleware.run(rootSaga);

export default configureStore;
