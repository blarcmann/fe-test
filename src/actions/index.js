import { SEARCH_STRING } from '../constants';

export const queryChanged = (q) => {
    return {
        type: SEARCH_STRING,
        payload: q
    }
}
