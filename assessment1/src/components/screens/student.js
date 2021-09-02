import React from "react";
import {getAverage} from "../helper/utils";
import AppButton from "../common/button";

const Student = props => {
    const {id, pic, firstName, lastName, city, company, grades, skill, email} = props
    const average = getAverage(grades)

    const handleClickOnStudentDetail = id => {
        console.log('clicked', id)
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
        </div>
        <div className='margin-r flex1'>
            <AppButton label='+' onclick={() => handleClickOnStudentDetail(id)}/>
        </div>
    </div>
}

export default Student
