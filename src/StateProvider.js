//setup data layer - context api
// To track the items in basket and user info

import {  createContext,useReducer,useContext} from "react";
// Data layer
export const  StateContext = createContext();

//  Provider - app in the provider to access the data layer

export const StateProvider = ({
    reducer,initialState,children
})=>(
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// TO use inside a component 
export const useStateValue = () => useContext(StateContext)
