import { configureStore } from '@reduxjs/toolkit';
import { credentialReducer } from './user';
import { localStorageAdd } from '../utils/LocalData';

const store = configureStore({
  reducer: {
    credential: credentialReducer
  }
});

store.subscribe(() => {
  const state = store.getState();
  localStorageAdd(state);
});

export default store;
