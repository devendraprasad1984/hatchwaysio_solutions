import React from "react";

const AppButton = props => {
    const {label, onclick, style, classname} = props

    return <div>
        <button
            onClick={onclick}
            style={style}
            className={classname}
        >
            <span className='bl'>{label}</span>
        </button>
    </div>
}

export default AppButton
