import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Themes, Auth, Filter } from './reducers';

const persistTheme = {
  key: '@SFR:theme',
  storage,
};

const persistAuth = {
  key: '@SFR:Auth',
  storage,
};

const persistFilter = {
  key: '@SFR:Filter',
  storage,
};


const persistedReducer = combineReducers({
  themes: persistReducer(persistTheme, Themes),
  Auth: persistReducer(persistAuth, Auth),
  Filter: persistReducer(persistFilter, Filter),
});

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
