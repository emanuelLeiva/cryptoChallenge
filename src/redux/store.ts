import cryptoReducer from './cryptoSlice';
import {configureStore, Store} from '@reduxjs/toolkit';
import {cryptoApi} from './api/crypto';


export const store: Store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
