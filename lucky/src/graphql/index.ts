import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    HttpLink,
    concat,
} from '@apollo/client';

import { genSignature, genNonceStr } from '../utils/crypto';

const authMiddleware = new ApolloLink((operation, forward) => {
    const nonce = genNonceStr();
    const timestamp = new Date().getTime();
    const signature = genSignature(nonce, timestamp);

    operation.setContext({
        headers: {
            'x-timestamp': timestamp,
            'x-nonce': nonce,
            'x-signature': signature,
        },
    });

    return forward(operation);
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(
        authMiddleware,
        new HttpLink({
            uri: process.env.REACT_APP_GRAPHQL_URI,
        }),
    ),
});

export default client;
