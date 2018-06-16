import { createStore} from 'redux';

/* const incrementCount = (payLoad = {}) => ({ 
    type: 'INCREMENT',
    incrementBy: typeof payLoad.incrementBy === 'number' ? payLoad.incrementBy : 1
}); */

//action generator returns an action object and destructuring
const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({ 
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({ 
    type: 'RESET'
 })

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure function,  a function which its ouptut depends ONLY on its input
// 2. Never change state or action, just read values to create the new state object

const countReducer = ((state = { count: 0} , action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
                }
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET' :
            return {
                count: 0
            };
        case 'SET' :
            return {
                count: action.count
            };
        default:
            return state;
    }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe (() => {
    console.log(store.getState());
});

store.dispatch (incrementCount());

store.dispatch (incrementCount({ incrementBy: 5 }));

store.dispatch (decrementCount()); 

store.dispatch (decrementCount({ decrementBy: 3})); 

store.dispatch (resetCount());
store.dispatch (setCount( {count: 20} ));
