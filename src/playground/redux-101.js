import { createStore } from 'redux'; 

//Action Generators - returns action objects
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 0}) => ({
    type: 'SET',
    count
});

//Reducers
//1. Reducers are pure functions (output only determined by input, not any outside factors such as global variables)
//2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy 
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy 
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(setCount({count: 2}));

store.dispatch(resetCount({}));
