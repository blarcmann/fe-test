import { SEARCH_STRING } from '../constants';

const initialState = {
    q: ''
}

export default function search(state = initialState, action) {
    console.log('actionnn', action.payload);
    switch (action.type) {
        case SEARCH_STRING:
            return { ...state, q: action.payload }
        default:
            return state;
    }
}