import React from 'react'
import MessageList from 'components/MessageList/MessageList'
import { MessageContainer } from 'components/MessageContainer/styles'

const messagesTypes = [
    {
        id : 1,
        type : 'Error'
    },
    {
        id : 2,
        type : 'Warning'
    },
    {
        id : 3,
        type : 'Info'
    },
]

const MessageContainerComponent = () => {
    return (
        <MessageContainer>
            {
                messagesTypes.map( ({id,type}) => {
                    return(
                        <MessageList  key = {id} type = {type}  id = {id} />
                    )
                })
            }
        </MessageContainer>
    )
}

export default MessageContainerComponent
