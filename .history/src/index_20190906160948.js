import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './serviceWorker';

import configureStore from './utils/configureStore';

export const history = createBrowserHistory({
    basename: '/',
});

export const store = configureStore(undefined, history);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider>
                <ConnectedRouter history={history}>
                    <Component />
                </ConnectedRouter>
            </ThemeProvider>
        </Provider>,
        document.getElementById('root'),
    );
};


if (process.env.NODE_ENV === 'development' && module.hot) {
    // Reload components
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();