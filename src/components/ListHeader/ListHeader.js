import React from 'react'

const ListHeader = ({type,id,count}) => {
    const color = id === 1 ? 'rgb(245, 98, 54)' : id === 2 ? "rgb(252, 231, 136)" : "rgb(136, 252, 163)" 
    return (
        <div className = 'list-header' style = {{'backgroundColor':color}}>
            <p>{`${type} Type ${id}`}</p>
            <p>{`Count ${count}`}</p>
        </div>
    )
}

export default ListHeader
