import React from "react";
import config from "../helper/config";

const Header = props => {

    const getMode=()=>{
        if(config.mode_offline)
            return <span className='txt-color-red'>OFFLINE</span>
        else
            return <span className='txt-color-green'>ONLINE</span>
    }
    return <div>
        <h2>{config.app_name} - mode {getMode()}</h2>
        <span className='size14 txt-color-offwhite'>{config.sub_heading}</span>
    </div>
}
export default Header
