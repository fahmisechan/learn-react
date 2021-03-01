import * as Type from './globalActionType.js';

const globalState = {
    totalOrder : 3
  }
  
  // Reducer
  
  // fungsi reducer adalah untuk mengubah value global state

   const rootReducer = (state = globalState, action) => {
     switch(action.type){
        case Type.ActionType.minus:
        let totalOrder = 0;
            if(state.totalOrder > 0){
                totalOrder = state.totalOrder - 1
            }
            return {
                ...state,
                totalOrder : totalOrder
            }
        case Type.ActionType.plus:
            return {
                ...state,
                totalOrder : state.totalOrder + 1
            } 
        default:
            return state;
        }
    }
  
  // Subscription
  
  // fungsi subscription adalah memberikan notifikasi ketika global state berubah
  
//   store.subscribe(() => {
//     console.log('this is subscribe ',store.getState())
//   })

  export default rootReducer;

  