import cryptoReducer from './cryptoSlice';
import {configureStore, Store} from '@reduxjs/toolkit';
import {criptoApi} from './api/crypto';


export const store: Store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    [criptoApi.reducerPath]: criptoApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(criptoApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
