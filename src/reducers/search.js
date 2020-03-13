import { SEARCH_STRING, FETCH_SUGGESTIONS } from '../constants';

const initialState = {
    q: '',
    suggestions: [],
}

export default function search(state = initialState, action) {
    switch (action.type) {
        case SEARCH_STRING:
            return { ...state, q: action.payload }
        case FETCH_SUGGESTIONS:
            const suggestions = action.payload;
            return { ...state, suggestions }
        default:
            return state;
    }
}