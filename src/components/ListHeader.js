import React from 'react'

const ListHeader = ({type,id,count}) => {
    return (
        <div>
            <p>{`${type} Type ${id}`}</p>
            <p>{`Count ${count}`}</p>
        </div>
    )
}

export default ListHeader
