import { Cache, QueryInput, cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange } from 'urql';

import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation
} from './generated/graphql';

export function updateQuery<Result, Data>(
  query: QueryInput,
  cache: Cache,
  result: any,
  updater: (result: Result, data: Data) => Data
) {
  return cache.updateQuery(query, data => updater(result, data as any) as any);
}

export const cache = cacheExchange({
  updates: {
    Mutation: {
      login(result, _, cache) {
        updateQuery<LoginMutation, MeQuery>(
          { query: MeDocument },
          cache,
          result,
          (result, data) => {
            if (result.login?.errors) {
              return data;
            }

            return {
              me: result.login?.user
            };
          }
        );
      },
      logout(result, _, cache) {
        updateQuery<LogoutMutation, MeQuery>(
          { query: MeDocument },
          cache,
          result,
          (result, data) => {
            if (!result.logout) {
              return data;
            }

            return {
              me: null
            };
          }
        );
      },
      register(result, _, cache) {
        updateQuery<RegisterMutation, MeQuery>(
          { query: MeDocument },
          cache,
          result,
          (result, data) => {
            if (result.register?.errors) {
              return data;
            }

            return {
              me: result.register?.user
            };
          }
        );
      }
    }
  }
});

export const urqlClient = createClient({
  fetchOptions: {
    credentials: 'include'
  },
  exchanges: [dedupExchange, cache, fetchExchange],
  url: 'http://localhost:4000/graphql'
});
