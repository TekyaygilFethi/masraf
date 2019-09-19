import { MODAL_TOGGLE } from '../types';

export const setModalToggle = () => dispatch => {
    dispatch({
        type: MODAL_TOGGLE
    });
};

export default function modalToggle(state = { modalToggle: false }, action = {}) {
    if (action.type === MODAL_TOGGLE) {
        return { ...state, modalToggle: !state.modalToggle }
    }
    return state;
}
