import React from "react";
import config from "../helper/config";

const Header=props=>{

    return <div>
        <h2>{config.app_name}</h2>
        <span className='size14 txt-color-offwhite'>{config.sub_heading}</span>
    </div>
}
export default Header
