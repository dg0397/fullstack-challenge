import React from 'react'

import { MessagesContextProvider } from 'context/ContextMessages'

import Header from 'components/Header/Header'
import MessageContainer from 'components/MessageContainer/MessageContainer'
import Notify from 'components/Notify/Notify'
import ButtonsContainer from 'components/ButtonsContainer/ButtonsContainer'

import 'App.css'

const MessageList = () => {
  return (
    <div id='app-container'>
      <Header />
      <MessagesContextProvider>
        <ButtonsContainer />
        <Notify />
        <MessageContainer />
      </MessagesContextProvider>
    </div>
  )
}

export default MessageList
