import React from "react";

const AppInput=props=>{
    const {placeholder, value, onchange, style, classname, onkeydown}=props

    return <div>
        <input
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            onKeyDown={onkeydown}
            style={style}
            className={classname}
        />
    </div>
}

export default AppInput
