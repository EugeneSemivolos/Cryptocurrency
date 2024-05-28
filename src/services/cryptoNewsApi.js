import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-rapidapi-key': '86fb050830msh77ccad326efb00ep1ca63ejsnc8adc51f1e5d',
  'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
};


const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest('/v1/coindesk'),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;