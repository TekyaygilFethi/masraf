import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import locale from './modules/locale';
import sidebar from './modules/sidebarToggle';
import modal from './modules/modal';
import sample from './modules/sample';

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    locale,
    sample,
    sidebar,
    modal
  });
