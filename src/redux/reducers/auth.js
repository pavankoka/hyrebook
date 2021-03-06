// const actionTypes = require('redux/actions/auth');
import authActions from 'redux/actions/auth';
import get from 'lodash/get';
// import { actionTypes } from 'redux/actions/auth';

export const defaultState = {
    user: 'pavan koka',
    isMobile: false,
};

// eslint-disable-next-line complexity
function reducer(state = defaultState, { type, payload = {} }) {
    const {
        actionTypes
    } = authActions;

    switch (type) {
        case actionTypes.GET_USER_DETAIL: {
            return {
                ...state,
            }
        }
        case actionTypes.SET_USER_DETAIL: {
            const name = get(payload, 'name', '');
            return {
                ...state,
                user: name,
            }
        }
        case actionTypes.SET_DEVICE: {
            const isMobile = get(payload, 'isMobile', false);
            return {
                ...state,
                isMobile,
            }
        }

        default:
            return state
    }
}

export default reducer;