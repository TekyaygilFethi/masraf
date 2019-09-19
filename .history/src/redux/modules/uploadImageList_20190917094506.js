import { SET_UPLOAD_IMAGE_LIST_REQUEST } from '../types';
import createDispatcher from '../../utils/createDispatcher';



export function setUploadImageList(data) {
    return dispatch => {
        debugger;
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
            return { uploadImageList: action.payload };
        default:
            return null;
    }
}