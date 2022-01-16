import { v4 as uuidv4 } from 'uuid';

function users(state = [], action) {
    switch (action.type) {
        case 'SET_USERS':
            return action.users ? action.users : state;
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: uuidv4(),
                    name: action.text,
                    creationDate: new Date()
                }
            ];
        case 'DELETE_USER':
            return state.filter(user => user.id !== action.id);
        default:
            return state;
    }
}

export default users;