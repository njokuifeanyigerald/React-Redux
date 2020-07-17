import {FETCH_POST,NEW_POST} from  '../actions/type';

const initialState = {
    items: [],
    item: {}
}

export default function( state = initialState, action){
    switch(action.type){
        // case FETCH_POST:

        default:
            return state;
    }

}