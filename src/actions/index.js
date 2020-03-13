import { SEARCH_STRING, FETCH_SUGGESTIONS } from '../constants';
import { suggestions } from '../constants/mocks';

export const queryChanged = (q) => {
    return {
        type: SEARCH_STRING,
        payload: q
    }
}

export const fetchSuggestions = () => {
    return {
        type: FETCH_SUGGESTIONS,
        payload: suggestions
    }
}
