import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '@redux/reducer';
import rootSaga from '@redux/sagas';
import {applyMiddleware, compose, createStore, Store} from 'redux';
import {Persistor, persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';

// Define a type for your Redux store
export type AppState = {
  // Define your state structure here
  appToken: string | null; // Example state property
  // Add other state properties as needed
};

// Define your Redux store type
export type ReduxStore = Store<AppState>;

// Define your Redux persistor type
export type ReduxPersistor = Persistor;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['users'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

// Create the store and persistor with their respective types
export const store: ReduxStore = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

// Export the persistor with its type
export const persistor: ReduxPersistor = persistStore(store);

export default store;
