import React, {useContext} from 'react'
import NoData from "./nodata";
import Student from "./student";
import MainAppContext from "../context/mainAppContext";
import {deepCopy} from "../helper/utils";


const Listing = props => {
    const {data} = props
    const {app} = useContext(MainAppContext)
    console.log('app', app)

    const displayList = () => {
        if (data.length === 0) return
        let listFilter = []
        let dataCopy = deepCopy(data)
        if (app.searchByName === '' && app.searchByTag === '')
            listFilter = dataCopy
        else {
            if (app.searchByName !== '') listFilter = dataCopy.filter(row => (row.firstName + ' ' + row.lastName).toLowerCase().indexOf(app.searchByName.toLowerCase()) !== -1)
            if (app.searchByTag !== '') listFilter = dataCopy.filter(row => (row.tags || []).indexOf(app.searchByTag.toLowerCase()) !== -1)
        }
        return listFilter.map((row, index) => {
            return <div key={`student_${index}`}>
                <Student {...row}/>
                <hr/>
            </div>
        })
    }

    if (data.length === 0) return <NoData/>
    return <div className='height-400 h-relative margin-ud'>
        {displayList()}
    </div>
}
export default Listing
