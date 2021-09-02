import React, {useContext, useState} from "react";
import {getAverage, padBy10} from "../helper/utils";
import AppButton from "../common/button";
import NoData from "./nodata";
import MainAppContext from "../context/mainAppContext";
import Tags from "../common/tags";
import AppInput from "../common/input";


const Student = props => {
    const {id, pic, firstName, lastName, city, company, grades, skill, email} = props
    const [displayDetails, setDisplayDetails] = useState(false)
    const [tags, setTags] = useState([])
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
        let gradesUI = grades.map((gr, index) => {
            return <div key={`stu-${id}-grade-detail-${index}`}>{`Test ${index + 1}: ${padBy10(gr)}%`}</div>
        })
        let tagUI = <div>
            {gradesUI}
            <AppInput placeholder={'add tag'} onkeydown={handleTagInput}/>
        </div>
        return tagUI
    }

    const handleTagInput = (e) => {
        if (e.keyCode !== 13) return
        let val = e.target.value
        setTags([...tags, val])
    }

    return <div className='flex-row left v-center-flex'>
        <div className='flex1'><img className='img-avatar' src={pic}/></div>
        <div className='size14 wid-80 pad-lr'>
            <h1>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
            <div className='txt-color-offwhite pad-lr'>
                <div>Email: {email}</div>
                <div>Company: {company}</div>
                <div>City: {city}</div>
                <div>Skill: {skill}</div>
                <div>Average: {average}</div>
            </div>
            <div><Tags values={tags}/></div>
            <div className='txt-color-offwhite pad-lr margin-ud'>{showDetails()}</div>
        </div>
        <div className='margin-r flex1'>
            <AppButton label={displayDetails ? '-' : '+'} onclick={() => handleClickOnStudentDetail(id)}/>
        </div>
    </div>
}

export default Student
