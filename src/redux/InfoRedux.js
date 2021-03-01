const Redux = require('redux');

const createStore = Redux.createStore;

const initialState = {
    value : 0,
    age : 18
}

// Reducer

const rootReducer = (state = initialState,action) => {
    if(action.type == 'Add age'){
        return {
            ...state,
            age : state.age + 1
        }
    }
    if(action.type == "change Value"){
        return {
            ...state,
            value : state.age + action.newValue
        }
    }
    return state
}

// Store

const store = createStore(rootReducer);

console.log(store.getState());

// Subscription

 // fungsi subscription adalah memberikan notifikasi ketika global state berubah

store.subscribe(() => {
    console.log('this is subscribe ',store.getState())
})

// Dispatching

store.dispatch({ type : 'Add age' })
store.dispatch({ type : 'change Value',newValue : 2 })
console.log(store.getState());
