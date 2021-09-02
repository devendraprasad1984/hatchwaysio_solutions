import React, {useState} from "react";
import AppInput from "../common/input";
import config from "../helper/config";
import Listing from "./listing";
import endpoints from "../helper/endpoints";
import Header from "./header";

const MainApp = (props) => {
    const [searchByName, setSearchByName] = useState('')
    const [searchByTag, setSearchByTag] = useState('')

    const handleInputSearchByName = e => {
        setSearchByName(e.target.name)
    }
    const handleInputSearchByTag = e => {
        setSearchByTag(e.target.name)
    }

    return <div>
        <Header/>
        <AppInput placeholder={'search by name'} onchange={handleInputSearchByName}/>
        <AppInput placeholder={'search by tag'} onchange={handleInputSearchByTag}/>
        <Listing
            url={endpoints.students}
            objectKey={config.objectKeys.student_api_object_key}
        />
    </div>
}
export default MainApp
