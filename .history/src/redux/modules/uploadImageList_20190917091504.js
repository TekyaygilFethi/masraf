import { SET_UPLOAD_IMAGE_LIST_REQUEST } from '../types';
import api from '../../api';
import createDispatcher from '../../utils/createDispatcher';
import createReducer from '../../utils/createReducer';



export function setUploadImageList(data) {
    return dispatch => {
        dispatch(createDispatcher(SET_UPLOAD_IMAGE_LIST_REQUEST, data));
    }
}