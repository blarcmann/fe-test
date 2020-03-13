import {
    SEARCH_STRING,
    FETCH_SUGGESTIONS,
    FETCH_RESULTS,
    RESULT_RESPONSE_MSG,
    RELATED_SEARCHES,
} from '../constants';
import { suggestions, results, misc, relatedSearches } from '../constants/mocks';

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

export const getResponseMsg = () => {
    return {
        type: RESULT_RESPONSE_MSG,
        payload: misc
    }
}

export const fetchResults = () => {
    return {
        type: FETCH_RESULTS,
        payload: results
    }
}

export const fetchRelated = () => {
    return {
        type: RELATED_SEARCHES,
        payload: relatedSearches
    }
}
