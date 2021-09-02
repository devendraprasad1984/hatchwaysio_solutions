import React, {useEffect, useState} from "react";
import AppInput from "../common/input";
import Listing from "./listing";
import endpoints from "../helper/endpoints";
import Header from "./header";
import {mainAppContextDispatcher, MainAppContextProvider} from "../context/mainAppContext";
import useFetchApi from "../common/useFetchApi";
import NoData from "./nodata";
import config from "../helper/config";
import {getStudents} from "../helper/offline";


const MainApp = (props) => {
    const [searchByName, setSearchByName] = useState('')
    const [searchByTag, setSearchByTag] = useState('')
    const [studentData, setStudentData] = useState([])

    const {data, loading, error} = useFetchApi(endpoints.students)

    useEffect(() => {
        if (error !== '' || config.mode_offline === true) {
            setStudentData(getStudents()[config.objectKeys.student_api_object_key])
        } else {
            setStudentData(data[config.objectKeys.student_api_object_key])
        }
    }, [data, loading, error])

    const handleInputSearchByName = e => {
        let val = e.target.value
        // let setVal = mainAppContextDispatcher(actions.SET_SEARCH_BY_NAME, {name: val})
        setSearchByName(val)
    }
    const handleInputSearchByTag = e => {
        let val = e.target.value
        // let setVal = mainAppContextDispatcher(actions.SET_SEARCH_BY_TAG, {tag: val})
        setSearchByTag(val)
    }
    const updateTags = (id, tags) => {
        let studata=[...studentData]
        let filter = studata.filter(x => x.id === id)[0]
        filter['tags'] = tags
        // console.log('filter',studentData,id,tags, filter)
        setStudentData([...studata])
    }
    const app = {searchByName, searchByTag, updateTags}

    if (loading === true) return <NoData msg={config.wait_msg}/>
    return <div>
        <MainAppContextProvider value={{app, mainAppContextDispatcher}}>
            <Header/>
            <AppInput placeholder={'search by name'} onchange={handleInputSearchByName}/>
            <AppInput placeholder={'search by tag'} onchange={handleInputSearchByTag}/>
            <Listing data={studentData}/>
        </MainAppContextProvider>
    </div>
}
export default MainApp
