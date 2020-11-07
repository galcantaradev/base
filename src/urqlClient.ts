import { Cache, QueryInput, cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange } from 'urql';

import {
  ChangePasswordMutation,
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  ProfileMutation,
  RegisterMutation
} from './generated/graphql';

export function updateQuery<Result, Query>(
  query: QueryInput,
  cache: Cache,
  result: any,
  mutation: string,
  updater: (result: Result, data: Query) => Query
) {
  return cache.updateQuery(query, data => {
    if (result[mutation]?.errors) {
      return data;
    }

    return updater(result, data as any) as any;
  });
}

export const cache = cacheExchange({
  updates: {
    Mutation: {
      login(result, _, cache) {
        updateQuery<LoginMutation, MeQuery>(
          { query: MeDocument },
          cache,
          result,
          'login',
          result => ({ me: result.login?.user })
        );
      },
      logout(result, _, cache) {
        updateQuery<LogoutMutation, MeQuery>(
          { query: MeDocument },
          cache,
          result,
          'logout',
          () => ({ me: null })
        );
      },
      register(result, _, cache) {
        updateQuery<RegisterMutation, MeQuery>(
          { query: MeDocument },
          cache,
          result,
          'register',
          result => ({ me: result.register?.user })
        );
      },
      profile(result, _, cache) {
        updateQuery<ProfileMutation, MeQuery>(
          { query: MeDocument },
          cache,
          result,
          'profile',
          result => ({ me: result.profile?.user })
        );
      },
      changePassword(result: any, _, cache) {
        updateQuery<ChangePasswordMutation, MeQuery>(
          { query: MeDocument },
          cache,
          result,
          'changePassword',
          result => ({ me: result?.changePassword?.user })
        );
      }
    }
  }
});

export const urqlClient = createClient({
  suspense: false,
  fetchOptions: {
    credentials: 'include'
  },
  exchanges: [dedupExchange, cache, fetchExchange],
  url: 'http://localhost:4000/graphql'
});
