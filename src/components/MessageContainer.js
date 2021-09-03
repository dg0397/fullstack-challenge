import React from 'react'
import MessageList from 'components/MessageList'

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

const MessageContainer = ({messages,deleteMessage}) => {
    return (
        <div>
            {
                messagesTypes.map( ({id,type}) => {
                    return(
                        <MessageList  key = {id} type = {type} messages = {messages} id = {id} deleteMessage ={deleteMessage}/>
                    )
                })
            }
        </div>
    )
}

export default MessageContainer
