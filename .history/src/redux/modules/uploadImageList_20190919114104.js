import { SET_UPLOAD_IMAGE_LIST_REQUEST, CLEAR_UPLOAD_IMAGE_LIST_REQUEST } from '../types';
import createDispatcher from '../../utils/createDispatcher';
import { arrayRemoveAll, arrayPush } from 'redux-form';
import _ from 'lodash';

export function clearUploadImageList(data) {
    return dispatch => {
        dispatch(createDispatcher(CLEAR_UPLOAD_IMAGE_LIST_REQUEST, data));
    }
}

export function setUploadImageList(data) {
    return dispatch => {

        dispatch(arrayRemoveAll("ExpenseForm", "contents"))


        data.map((item, i) => (
            dispatch(arrayPush("ExpenseForm", "contents", { documentDate: "test" + i }))
        ));


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
        case CLEAR_UPLOAD_IMAGE_LIST_REQUEST:
            return { ...state, data: null };
        default:
            return state;
    }
}