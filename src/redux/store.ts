import cryptoReducer from './cryptoSlice';
import {Action, configureStore, Store} from '@reduxjs/toolkit';
import {criptoApi} from './api/crypto';

export const store: Store<{[key: string]: any}, Action<any>> = configureStore({
  reducer: {
    crypto: cryptoReducer,
    [criptoApi.reducerPath]: criptoApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(criptoApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
