// eslint-disable-next-line no-use-before-define
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import client from './graphql';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { store } from './state';

import './i18n';
ReactGA.initialize('UA-194277456-3');
ReactGA.pageview(window.location.pathname + window.location.search);
window.addEventListener('error', (error) => {
    ReactGA.exception({
        description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
        fatal: true,
    });
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Suspense fallback={<></>}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </ApolloProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
