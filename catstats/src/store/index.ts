import { combineReducers, Store, createStore } from 'redux';
import { themeReducer } from './theme/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const rootReducer = combineReducers({
  theme: themeReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'cat-stat-app',
  storage,
  whitelist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store<RootStateType> = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export type ActionType = {
  type: string;
  [key: string]: string;
};
