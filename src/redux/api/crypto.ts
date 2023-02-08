import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import {Crypto} from '../../components/cryptoList/types';

type GetCryptoResponse = Crypto;

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
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
