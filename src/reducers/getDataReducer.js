import {GET_USER, RETURN_INITIAL_STATE, SHOW_BRANCHES} from "../constants/actionTypes";
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'GET_USER_NEW':
            console.log(action.user);
            return [ action.user, ...state ];
        case 'SHOW_REPOS_NEW':
            return [ ...state, action.repos ];
        case SHOW_BRANCHES:
            return [ ...state, action.payload.data ];
        case RETURN_INITIAL_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}