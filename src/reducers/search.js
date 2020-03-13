import {
    SEARCH_STRING,
    FETCH_SUGGESTIONS,
    FETCH_RESULTS,
    RESULT_RESPONSE_MSG,
    RELATED_SEARCHES,
} from '../constants';

const initialState = {
    q: '',
    msg: '',
    related: [],
    suggestions: [],
    results: []
}

export default function search(state = initialState, action) {
    switch (action.type) {
        case SEARCH_STRING:
            return { ...state, q: action.payload }

        case FETCH_SUGGESTIONS:
            const suggestions = action.payload;
            return { ...state, suggestions }

        case FETCH_RESULTS:
            const results = action.payload;
            return { ...state, results }

        case RELATED_SEARCHES:
            const related = action.payload;
            return { ...state, related }

        case RESULT_RESPONSE_MSG:
            const msg = action.payload;
            return { ...state, msg }
        default:
            return state;
    }
}
