import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import peopleReducer from "./reducers/peopleReducer";


// combineReducers can be a name, called rootReducers  

const combinedReducers = combineReducers({
    peoples: peopleReducer,
})

const store = createStore(combinedReducers, composeWithDevTools());

export default store;