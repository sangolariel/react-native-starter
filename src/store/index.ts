import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['common', 'language', 'storage'],
};

const composeEnhancers: any =
  process.env.ENV === 'development' ? composeWithDevTools() : compose;

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
