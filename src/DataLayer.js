import {createContext, useContext, useReducer} from 'react'

export const DataLaterContext = createContext();

export const DataLayer = ( { initialState, reducer, children }) => (
<DataLaterContext.Provider value = {useReducer(reducer, initialState)}>
   {children} 
</DataLaterContext.Provider>
)

export const useDataLayervalue = () => useContext(DataLaterContext)