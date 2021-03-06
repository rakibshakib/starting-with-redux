import peoples from '../../Data/people-data.json';
const initialState = {
    peoples: peoples,
    addedPeople: [],
    removedPeople: [],
};

function peopleReducer(state = initialState, action) {
    console.log('this is the action', action.payload);
    switch (action.type) {
        case 'ADD_PEOPLE_TO_LIST': {
            const isExist = state.addedPeople.find(
                (item) => item.id === action.payload.id
            );
            if (isExist) {
                return state;
            }
            const newState = {
                ...state,
                addedPeople: [...state.addedPeople, action.payload],
            };
            return newState;
        }
        case 'REMOVE_PEOPLE_FROM_LIST': {
            const newState = {
                ...state,
                addedPeople: state.addedPeople.filter(
                    (people) => people.id !== action.payload.id
                ),
                removedPeople: [...state.removedPeople, action.payload],
            };
            return newState;
        }
        default:
            return state;
    }
}
export default peopleReducer;
