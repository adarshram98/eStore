export const initialState={
    basket :[{
        id:"2312321",
           title:"shoe",
           price:999,
           rating:4,
           image:"https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
    }],
    user:null,
}

export const getSubtotal=(basket) =>
basket?.reduce((amount,item)=>item.price +amount,0)

function reducer(state,action){
    console.log(action)
    switch(action.type){
        case 'SET_USER':
        return {
            ...state,user:action.user
        }
        case 'ADD_TO_BASKET':
            // logic to add to basket
            return {...state,
                basket:[...state.basket,action.item]}
            
        case 'REMOVE_FROM_BASKET':
        //clone the basket
        let newBasket = [...state.basket]
        //find the index
        const index = state.basket.findIndex((item)=> item.id === action.id )
        if(index>=0)
        {
            //remove the item at the index
            newBasket?.splice(index,1)
        }
                return {...state,basket:newBasket};
           
        
            default:
                return state;
    }
}

export default reducer;