import { combineReducers } from 'redux';
import { filterReducer } from './filter/filterSlice';
import { userReducer } from './user/userSlice';
import { authReducer } from './auth/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});
