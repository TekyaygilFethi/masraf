import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import configureStore from './utils/configureStore';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const history = createBrowserHistory({
    basename: '/',
});

export const store = configureStore(undefined, history);



const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <ConnectedRouter history={history}>
                    <Component />
                </ConnectedRouter>
            </MuiThemeProvider>
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