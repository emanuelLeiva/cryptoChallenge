import {createSlice} from '@reduxjs/toolkit';
import {InitialStateType} from './types';

const initialState: InitialStateType = {
  cryptos: [],
  crypto: [],
  id: '',
  State: ''
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    add: (state, {payload}) => {
      if (state.cryptos.find(crypto => crypto.id === payload.id) === undefined)
        state.cryptos = [...state.cryptos, payload];
    },
  },
});

export const {add} = cryptoSlice.actions;
export default cryptoSlice.reducer;
