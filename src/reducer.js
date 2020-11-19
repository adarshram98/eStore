export const initialState={
    basket :[],
    user:null,
}

function reducer(state,action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            // logic to add to basket
            return {...state,
                basket:[...state.basket,action.item]}
            break;
        case 'REMOVE_FROM_BASKET':
           
            break;
        
            default:
                return state;
    }
}

export default reducer;