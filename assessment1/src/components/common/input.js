import React from "react";

const AppInput=props=>{
    const {placeholder, value, onchange, style, classname}=props

    return <div>
        <input
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            style={style}
            className={classname}
        />
    </div>
}

export default AppInput
