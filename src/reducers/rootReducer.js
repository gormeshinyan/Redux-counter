const initialState= { 
    counter:0
}

function rootReducer(state = initialState, action){

switch(action.type){
    case 'INCREMENT' :
    return { counter: state.counter + 1}
    case 'DECREMENT' :
    return { counter: state.counter - 1}
    case 'RESET' :
    return { counter: initialState.counter}
    default :
    return state; 
}
}


export default rootReducer;