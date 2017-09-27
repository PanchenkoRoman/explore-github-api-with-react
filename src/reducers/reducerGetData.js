import {GET_USER, SHOW_REPOS, RETURN_INITIAL_STATE} from "../constants/actionTypes";
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case GET_USER:
            return [ action.payload.data, ...state ];
        case SHOW_REPOS:
            return [ ...state, action.payload.data ];
        case RETURN_INITIAL_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}