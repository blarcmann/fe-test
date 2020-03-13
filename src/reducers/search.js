import { SEARCH_STRING, FETCH_SUGGESTIONS, FETCH_RESULTS, RESULT_RESPONSE_MSG } from '../constants';

const initialState = {
    q: '',
    msg: '',
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

        case RESULT_RESPONSE_MSG:
            const msg = action.payload;
            return { ...state, msg }
        default:
            return state;
    }
}
