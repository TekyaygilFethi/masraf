import { SET_UPLOAD_IMAGE_LIST_REQUEST } from '../types';
import createDispatcher from '../../utils/createDispatcher';
import { arrayRemoveAll, arrayPush } from 'redux-form';
import _ from 'lodash';

export function setUploadImageList(data) {
    return dispatch => {

        debugger
        dispatch(arrayRemoveAll("ExpenseForm", "contents"))

        if (!_.isUndefined(data)) {
            data.map((item, i) => (
                dispatch(arrayPush("ExpenseForm", "contents", ""))
            ));
        }

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