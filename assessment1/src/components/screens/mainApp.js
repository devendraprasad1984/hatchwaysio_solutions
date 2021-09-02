import React, {useState} from "react";
import AppInput from "../common/input";
import config from "../helper/config";
import Listing from "./listing";
import endpoints from "../helper/endpoints";
import Header from "./header";
import {getStudents} from "../helper/offline";
import {mainAppContextDispatcher, MainAppContextProvider} from "../context/mainAppContext";
import actions from "../common/actions";


const MainApp = (props) => {
    const [searchByName, setSearchByName] = useState('')
    const [searchByTag, setSearchByTag] = useState('')

    const handleInputSearchByName = e => {
        let val = e.target.value
        let setVal = mainAppContextDispatcher(actions.SET_SEARCH_BY_NAME, {name: val})
        // console.log('val',val,'setval', setVal)
        setSearchByName(setVal.name)
    }
    const handleInputSearchByTag = e => {
        let val = e.target.value
        let setVal = mainAppContextDispatcher(actions.SET_SEARCH_BY_TAG, {tag: val})
        setSearchByTag(setVal.tag)
    }
    const app = {searchByName, searchByTag}
    return <div>
        <MainAppContextProvider value={{app, mainAppContextDispatcher}}>
            <Header/>
            <AppInput placeholder={'search by name'} onchange={handleInputSearchByName}/>
            <AppInput placeholder={'search by tag'} onchange={handleInputSearchByTag}/>
            <Listing
                url={endpoints.students}
                objectKey={config.objectKeys.student_api_object_key}
                mode={config.mode_offline}
                offline_data={getStudents()}
                searchByName={searchByName}
                searchByTag={searchByTag}
            />
        </MainAppContextProvider>
    </div>
}
export default MainApp
