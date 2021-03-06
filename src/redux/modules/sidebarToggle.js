import { SIDEBAR_TOGGLE } from '../types';

export const sidebarToggle = () => dispatch => {
    dispatch({
        type: SIDEBAR_TOGGLE
    });
};

export default function sidebar(state = { sidebarToggle: false }, action = {}) {
    if (action.type === SIDEBAR_TOGGLE) {
        return { ...state, sidebarToggle: !state.sidebarToggle }
    }
    return state;
}
