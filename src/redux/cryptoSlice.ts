import {createSlice} from '@reduxjs/toolkit';
import {InitialStateType} from './types';
import { Crypto } from '../components/cryptoList/types';

const initialState: InitialStateType = {
  cryptos: [],
  State: '',
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    add: (state, {payload}) => {
      if (state.cryptos.find(({ id }) => id === payload.id) === undefined)
        state.cryptos = [...state.cryptos, payload];
    },
    update: (state, {payload}) => {
      state.cryptos=state.cryptos.map((crypto, index) => payload[index]? payload[index] : crypto)
    }
  },
});

export const {add, update} = cryptoSlice.actions;
export default cryptoSlice.reducer;
