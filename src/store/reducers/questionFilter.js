const validFilters = ['all', 'answered', 'unanswered'];
const defaultFilter = 'unanswered';

function questionFilter(state = defaultFilter, action) {
    console.log("questionFilter", action);
    switch (action.type) {
        case 'SET_QUESTION_FILTER':
            console.log("SET_QUESTION_FILTER", action);
            return (action.filter && validFilters.includes(action.filter)) ? action.filter : defaultFilter;
        default: 
            return state;
    }
}

export default questionFilter;
