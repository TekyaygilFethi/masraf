import { SET_UPLOAD_IMAGE_LIST_REQUEST } from '../types';
import createDispatcher from '../../utils/createDispatcher';



export function setUploadImageList(data) {
    return dispatch => {
        dispatch(createDispatcher(SET_UPLOAD_IMAGE_LIST_REQUEST, data));
    }
}

export default function reducer(
    state = {
    },
    action,
) {
    switch (action.type) {
        case SET_UPLOAD_IMAGE_LIST_REQUEST:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}