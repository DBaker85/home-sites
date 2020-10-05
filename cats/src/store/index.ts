import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './theme/themeSlice';

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

export const store: Store<RootStateType> = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
