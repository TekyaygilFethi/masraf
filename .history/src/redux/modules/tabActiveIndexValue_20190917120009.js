import { ACTIVE_TAB_INDEX_VALUE_REQUEST } from '../types';
import createDispatcher from '../../utils/createDispatcher';



export function setActiveTabIndexValue(data) {
    return dispatch => {
        dispatch(createDispatcher(ACTIVE_TAB_INDEX_VALUE_REQUEST, data));
    }
}

export default function reducer(
    state = {
        data: 0
    },
    action,
) {
    switch (action.type) {
        case ACTIVE_TAB_INDEX_VALUE_REQUEST:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}