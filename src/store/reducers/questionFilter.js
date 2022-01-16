const validFilters = ['all', 'answered', 'unanswered'];
const defaultFilter = 'all';

function questionFilter(state = defaultFilter, action) {
    switch (action.type) {
        case 'SET_QUESTION_FILTER':
            return (action.filter && validFilters.includes(action.filter)) ? action.filter : defaultFilter;
        default: 
            return state;
    }
}

export default questionFilter;
