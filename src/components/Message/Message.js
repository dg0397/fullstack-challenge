import React from 'react'

import { Message } from 'components/Message/styles'
import Button from 'components/Button/Button'

import useMessages from 'hooks/useMessages'

const MessageComponent = ({message,priority}) => {
    const {deleteMessage} = useMessages()
        
    return (
        <Message priority = {priority}>
            <p>{message}</p>
            <Button handleClick = {() => deleteMessage(message)} text = 'Clear'/>
        </Message>
    )
}

export default MessageComponent
