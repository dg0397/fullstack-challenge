import React from 'react'

import Button from 'components/Button/Button'

import useMessages from 'hooks/useMessages'

const Message = ({message}) => {
    const {deleteMessage} = useMessages()
    const {message:text, priority} = message

    const color = priority === 1 ? 'rgb(245, 98, 54)' : priority === 2 ? "rgb(252, 231, 136)" : "rgb(136, 252, 163)" 

    return (
        <div className = 'message' style = {{'backgroundColor' : color}}>
            <p>{text}</p>
            <Button handleClick = {() => deleteMessage(text)} text = 'Clear'/>
        </div>
    )
}

export default Message
