import React, {createContext, useContext, useReducer } from "react"

//Prepares the data layer
export const StateContext = createContext()

// Wrap the app and provide data layer for all components
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
);

// Pull information from data layer
export const useStateValue = () => useContext(StateContext)