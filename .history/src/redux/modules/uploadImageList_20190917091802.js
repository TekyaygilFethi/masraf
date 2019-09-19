import { SET_UPLOAD_IMAGE_LIST_REQUEST } from '../types';
import api from '../../api';
import createDispatcher from '../../utils/createDispatcher';
import createReducer from '../../utils/createReducer';



export function setUploadImageList(data) {
    return dispatch => {
        dispatch(createDispatcher(SET_UPLOAD_IMAGE_LIST_REQUEST, data));
    }
}

export default function reducer(
    state = {
        isFetching: false,
        isLoaded: false,
        isFailure: false,
    },
    action,
) {
    switch (action.type) {
        case SET_UPLOAD_IMAGE_LIST_REQUEST:
            return { ...state, uploadImageList: action.data };
        default:
            return state;
    }
}