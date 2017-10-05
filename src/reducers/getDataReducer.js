import * as types from "../constants/actionTypes";
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case types.GET_USER_NEW:
            console.log(action.user);
            return [ action.user, ...state ];
        case types.SHOW_REPOS_NEW:
            return [ ...state, action.repos ];
        case types.GET_BRANCHES_NEW:
            return [ ...state, action.branches ];
        case types.RETURN_INITIAL_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}