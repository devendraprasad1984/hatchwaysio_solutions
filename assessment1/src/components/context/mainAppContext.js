import {createContext} from "react";

const MainAppContext = createContext()
export const MainAppContextProvider = MainAppContext.Provider
export const mainAppContextDispatcher = (actionType, payload) => {
    console.log('inside mainAppContextDispatcher', actionType, payload)
}
export default MainAppContext
