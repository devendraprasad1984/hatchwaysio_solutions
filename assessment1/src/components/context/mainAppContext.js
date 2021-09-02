import {createContext} from "react";
import actions from '../common/actions'


const MainAppContext = createContext()
export const MainAppContextProvider = MainAppContext.Provider
let initSearch = {name: '', tag: ''}
export const mainAppContextDispatcher = (actionType, payload={}) => {
    // console.log('inside mainAppContextDispatcher', actionType, payload)
    let update = {...initSearch, ...payload}
    switch (actionType) {
        case actions.GET_SEARCH_BY_NAME:
            return update['name']
        case actions.GET_SEARCH_BY_TAG:
            return update['tag']
        case actions.SET_SEARCH_BY_NAME || actionType.SET_SEARCH_BY_TAG:
            return update
        default:
            return update
    }
}
export default MainAppContext
