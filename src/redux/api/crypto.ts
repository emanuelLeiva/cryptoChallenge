import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import {Crypto} from '../../components/cryptoList/types';

type GetCryptoResponse = Crypto;

export const criptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({
    getCrypto: builder.query<GetCryptoResponse, string>({
      query: name => `${name}/metrics#`,
    }),
  }),
});

export const {useLazyGetCryptoQuery} = criptoApi;
