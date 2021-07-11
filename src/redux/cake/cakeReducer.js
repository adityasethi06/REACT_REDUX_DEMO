import { BUY_CAKE } from "./cakeTypes"

const init_state = {
    numOfCakes: 10
}

export const cakeReducer = (state=init_state, action) => {
    console.log(state);
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}