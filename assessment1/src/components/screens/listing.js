import React, {useContext, useEffect, useState} from 'react'
import {get} from "../helper/api";
import NoData from "./nodata";
import Student from "./student";
import MainAppContext from "../context/mainAppContext";
import {deepCopy} from "../helper/utils";


const Listing = props => {
    const {url, objectKey, mode, offline_data, searchByName, searchByTag} = props
    const [thisListData, setThisListData] = useState([])
    const {app} = useContext(MainAppContext)

    const fetchFromURL = () => {
        if (!mode) {
            get(url, data => {
                // console.log(`data from ${url} = ${data}`)
                if (data[objectKey] === undefined)
                    setThisListData(data)
                else
                    setThisListData(data[objectKey])
            })
        } else {
            setThisListData(offline_data)
        }
    }
    useEffect(() => {
        fetchFromURL()
    }, [])

    const displayList = () => {
        if (thisListData.length === 0) return
        let listFilter = []
        let dataCopy = deepCopy(thisListData)
        if (app.searchByName === '' && app.searchByTag === '')
            listFilter = dataCopy
        else
            listFilter = dataCopy.filter(row => (row.firstName + ' ' + row.lastName).toLowerCase().indexOf(app.searchByName.toLowerCase()) !== -1)

        return listFilter.map((row, index) => {
            return <div key={`student_${index}`}>
                <Student {...row}/>
                <hr/>
            </div>
        })
    }

    if (thisListData.length === 0) return <NoData/>
    return <div className='height-400 h-relative margin-ud'>
        {displayList()}
    </div>
}
export default Listing
