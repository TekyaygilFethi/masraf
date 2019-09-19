import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import locale from './modules/locale';
import sidebar from './modules/sidebarToggle';
import modal from './modules/modal';
import uploadImageList from './modules/uploadImageList';
import tabActiveIndexValue from './modules/tabActiveIndexValue';

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    locale,
    sidebar,
    modal,
    uploadImageList,
    activeIndexValue
  });
