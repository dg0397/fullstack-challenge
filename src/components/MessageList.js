import React from 'react'
import ListHeader from 'components/ListHeader'
import Message from 'components/Message'

const MessageList = ({messages, id, type,deleteMessage}) => {
    const messagesToTheList = messages.filter(message => message.priority === id)
    return (
        <div>
            <ListHeader id = {id} type = {type} count = {messagesToTheList.length} />
            {
                messagesToTheList.map( (message,index) => {
                    return ( 
                        <Message id = {index} message = {message} key = {index} deleteMessage = {deleteMessage} />
                    )
                })
            }
        </div>
    )
}

export default MessageList
