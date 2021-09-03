import React from 'react'

const Message = ({message,deleteMessage}) => {
    const {message:text} = message

    const handleClick = () => {
        deleteMessage(text)
    }
    const color = message.priority === 1 ? 'rgb(245, 98, 54)' : message.priority === 2 ? "rgb(252, 231, 136)" : "rgb(136, 252, 163)" 

    return (
        <div className = 'message' style = {{'backgroundColor' : color}}>
            <p>{text}</p>
            <button onClick = {handleClick}>Clear</button>
        </div>
    )
}

export default Message
