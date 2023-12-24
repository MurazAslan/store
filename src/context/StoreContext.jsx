import React, { createContext, useReducer } from 'react'


export const storeContext = createContext()
const reducer = (state, action) => {
    const { id } = action
    const { price, count,title } = action.payload
    switch (action.type) {
        case 'add':
            state.count = count
            state.price = price * count
            state.title = title
            return [...state,state]
            default: 
            return state
    }

}

const StoreContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])
    return (
        <storeContext.Provider value={{ state, dispatch }}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreContextProvider
