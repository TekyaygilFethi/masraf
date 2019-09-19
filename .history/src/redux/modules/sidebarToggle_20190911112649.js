import { SIDEBAR_TOGGLE } from '../types';
import { localStorageData } from '../../utils/helper';

export const sidebarToggle = toggle => dispatch => {
    localStorageData.set('toggle', toggle);
    dispatch({
        type: SIDEBAR_TOGGLE,
        toggle,
    });
};

export default function sidebar(state = { toggle: false }, action = {}) {
    if (action.type === SIDEBAR_TOGGLE) {
        debugger;
        return { ...state, sidebarToggle: !state.toggle }
    }
    return state;
}
