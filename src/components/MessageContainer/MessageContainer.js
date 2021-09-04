import React from 'react'
import MessageList from 'components/MessageList/MessageList'

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

const MessageContainer = () => {
    return (
        <div id = "message-container">
            {
                messagesTypes.map( ({id,type}) => {
                    return(
                        <MessageList  key = {id} type = {type}  id = {id} />
                    )
                })
            }
        </div>
    )
}

export default MessageContainer
