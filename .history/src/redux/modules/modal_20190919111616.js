import { MODAL_TOGGLE } from '../types';
import { arrayRemoveAll, arrayPush } from 'redux-form';


export const setModalToggle = (modalToggle) => dispatch => {

    if (modalToggle) {
        dispatch(arrayRemoveAll("ExpenseForm", "contents"))
        dispatch(arrayPush("ExpenseForm", "contents", ""))
    }

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
