import { SIDEBAR_TOGGLE } from '../types';

export const setModalToggle = () => dispatch => {
    dispatch({
        type: SIDEBAR_TOGGLE
    });
};

export default function modalToggle(state = { modalToggle: false }, action = {}) {
    if (action.type === SIDEBAR_TOGGLE) {
        return { ...state, modalToggle: !state.modalToggle }
    }
    return state;
}
