import {createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL} from '@env';
import axios from 'axios';
import {CryptoType} from './types';

export const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async (code: string) => {
    try {
      const response = await axios.get(`${API_URL}${code}/metrics#`);
      return response.data;
    } catch (error) {
      throw new Error('Fetch error');
    }
  },
);

export const updateFetchCrypto = createAsyncThunk(
  'crypto/updateFetchCrypto',
  async (crypto: CryptoType[]) => {
    const updateData = [];

    for (let i = 0; i < crypto.length; i++) {
      const response = await axios.get(`${API_URL}${crypto[i].symbol}/metrics`);

      updateData.push(response.data.data);
    }
    return updateData;
  },
);
