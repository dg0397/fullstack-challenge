import React from 'react'
import ListHeader from 'components/ListHeader/ListHeader'
import Message from 'components/Message/Message'
import useGlobalMessages from 'hooks/useGlobalMessages'

const MessageList = ({ id, type }) => {
    const {messagesToTheList} = useGlobalMessages({type:id})
    return (
        <div className = 'message-list'>
            <ListHeader id = {id} type = {type} count = {messagesToTheList.length} />
            {
                messagesToTheList.map( (message,index) => {
                    return ( 
                        <Message id = {index} message = {message} key = {index}/>
                    )
                })
            }
        </div>
    )
}

export default MessageList
