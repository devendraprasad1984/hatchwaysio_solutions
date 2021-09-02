import React from "react";


const Tags = props => {
    const {values} = props

    const displayTags = () => {
        return values.map((tag, index) => {
            return <span className='size14 tag' key={`tag-at-${index}`}>{tag}</span>
        })
    }
    if (values === undefined) return null
    if (values.length === 0) return null
    return <div className='tag-flex bl margin-ud'>
        {displayTags()}
    </div>
}
export default Tags
