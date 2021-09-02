import React from "react";

const NoData = props => {
    const {msg} = props
    const xmsg = msg === undefined ? 'please wait...' : msg
    return <div>
        <span>{xmsg}</span>
    </div>
}

export default NoData
