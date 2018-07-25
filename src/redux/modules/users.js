import {createAction, handleActions} from 'redux-actions';
import * as api from 'lib/api';

const GET_USER_PENDING = 'users/GET_USER_PENDING';
const GET_USER_FULFILLED = 'users/GET_USER_FULFILLED';
const GET_USER_REJECTED = 'users/GET_USER_REJECTED';

const pending = createAction(GET_USER_PENDING);
const fulfilled = createAction(GET_USER_FULFILLED);
const rejected = createAction(GET_USER_REJECTED);

export const getUsers = () => dispatch => {
    dispatch(pending());

    return api.getUser().then(response => {
        dispatch(fulfilled(response.data));
    }).catch(error => {
        dispatch(rejected());
    });
};

const initialState = {
    pending: false,
    rejected: false,
    data: []
};

export default handleActions({
    [GET_USER_PENDING]: (state) => {
        return {
            ...state,
            pending: true,
            rejected: false
        }
    },

    [GET_USER_FULFILLED]: (state, action) => {
        return {
            ...state,
            pending:false,
            data: action.payload
        }
    },

    [GET_USER_REJECTED]: (state) => {
        return {
            ...state,
            pending: false,
            rejected: true
        }
    }
}, initialState);