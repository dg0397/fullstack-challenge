import React from 'react'
import ListHeader from 'components/ListHeader/ListHeader'
import Message from 'components/Message/Message'
import useGlobalMessages from 'hooks/useGlobalMessages'
import { MessageList } from './styles'

const MessageListComponent = ({ id, type }) => {
  const { messagesToTheList } = useGlobalMessages({ type: id })
  return (
    <MessageList type={type} className='messageList'>
      <ListHeader id={id} type={type} count={messagesToTheList.length} />
      {
                messagesToTheList.map(({ message, priority }) => {
                  return (
                    <Message message={message} key={message} priority={priority} />
                  )
                })
            }
    </MessageList>
  )
}

export default MessageListComponent
