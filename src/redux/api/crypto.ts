import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL, API_KEY} from '@env';
import {Crypto} from '../../components/cryptoList/types';

type GetCryptoResponse = {data: Crypto};

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: {
      'x-messari-api-key': API_KEY,
    },
  }),
  endpoints: builder => ({
    getCrypto: builder.query<GetCryptoResponse, string>({
      query: name => `${name}/metrics#`,
    }),
    getCryptos: builder.query({
      queryFn: names => {
        const promises = names.map((name: string) =>
          fetch(`${API_URL}${name}/metrics#`),
        );
        return Promise.all(promises)
          .then(results => Promise.all(results.map(result => result.json())))
          .then(results => ({data: results.map(({data}) => data)}));
      },
    }),
  }),
});

export const {useLazyGetCryptoQuery, useLazyGetCryptosQuery} = cryptoApi;
