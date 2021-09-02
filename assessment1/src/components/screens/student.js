import React, {useContext, useState} from "react";
import {getAverage} from "../helper/utils";
import AppButton from "../common/button";
import NoData from "./nodata";
import MainAppContext from "../context/mainAppContext";


const Student = props => {
    const {id, pic, firstName, lastName, city, company, grades, skill, email} = props
    const [displayDetails, setDisplayDetails] = useState(false)
    const {app, mainAppContextDispatcher} = useContext(MainAppContext)
    // const [clickedStudentDetails, setClickedStudentDetails]=useState({})
    const average = getAverage(grades) + '%'

    const handleClickOnStudentDetail = id => {
        // const searchName=mainAppContextDispatcher(actions.GET_SEARCH_BY_NAME,{id: id})
        const searchName = app.searchByName || ''
        const tagName = app.searchByTag || ''
        console.log('searchName', searchName, 'tagName', tagName)
        setDisplayDetails(!displayDetails)
    }

    const showDetails = () => {
        if (displayDetails === false) return null
        const nodata = <NoData msg='no grades present'/>
        if (grades === undefined) return nodata
        if (grades.length === 0) return nodata
        return grades.map((gr, index) => {
            return <div key={`stu-${id}-grade-detail-${index}`}>{`Test ${index + 1}: ${parseInt(gr)}%`}</div>
        })
    }

    return <div className='flex-row left v-center-flex'>
        <div className='flex1'><img className='img-avatar' src={pic}/></div>
        <div className='size14 wid-80 pad-lr'>
            <h2>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h2>
            <div className='txt-color-offwhite pad-lr'>
                <div>Email: {email}</div>
                <div>Company: {company}</div>
                <div>City: {city}</div>
                <div>Skill: {skill}</div>
                <div>Average: {average}</div>
            </div>
            <div className='txt-color-offwhite pad-lr margin-ud'>{showDetails()}</div>
        </div>
        <div className='margin-r flex1'>
            <AppButton label={displayDetails ? '-' : '+'} onclick={() => handleClickOnStudentDetail(id)}/>
        </div>
    </div>
}

export default Student
