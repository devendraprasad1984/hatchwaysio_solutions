import React, {useEffect, useState} from 'react'
import {get} from "../helper/api";
import NoData from "./nodata";
import Student from "./student";

const Listing = props => {
    const {url, objectKey} = props
    const [thisListData, setThisListData] = useState([])

    const fetchFromURL = () => {
        get(url, data => {
            console.log(`data from ${url} = ${data}`)
            if (data[objectKey] === undefined)
                setThisListData(data)
            else
                setThisListData(data[objectKey])
        })
    }
    useEffect(() => {
        fetchFromURL()
    }, [])

    const displayList = () => {
        if (thisListData.length === 0) return
        return thisListData.map(row => {
            return <div>
                <Student {...row}/>
                <hr/>
            </div>
        })
    }

    if (thisListData.length === 0) return <NoData/>
    return <div className='height-400 h-relative margin-ud'>
        {/*<h3>{objectKey === '' || objectKey === undefined ? '' : `Listing....${objectKey.toUpperCase()}`}</h3>*/}
        {displayList()}
    </div>
}
export default Listing
