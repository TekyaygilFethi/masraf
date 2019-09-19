import { MODAL_TOGGLE } from '../types';

export const setModalToggle = (modalToggle) => dispatch => {
    dispatch({
        type: MODAL_TOGGLE,
        modalToggle
    });
};

export default function modalToggle(state = { modalToggle: false }, action = {}) {
    if (action.type === MODAL_TOGGLE) {
        return { ...state, modalToggle: action.modalToggle }
    }
    return state;
}
