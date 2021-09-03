import React, { Component, useEffect, useMemo, useState } from 'react'
import Button from '@material-ui/core/Button'
import Api from 'api'

import Header from 'components/Header'
import MessageContainer from 'components/MessageContainer'
import Notify from 'components/Notify'

const MessageList = () => {
  const [messages,setMessages] = useState([])
  const api = useMemo(()=> new Api({ messageCallback : (message) => messageCallback(message) }), []) 
  const [isApiStarted,setApiStarted] = useState(true)
  const [notify,setNotify] = useState('')

  useEffect(()=> {
    api.start()
    console.log('stating app')
  },[])

  useEffect(()=>{
    if(notify){
      setTimeout(() => setNotify(''), 10000)
    }
  },[notify])

  const messageCallback = (message) => {
    const {priority} = message;
    if(priority === 1){
      setNotify(message.message)
    }
    setMessages(prevState => {
      return [...prevState,message]
    })
    //console.log(message)
    //console.log(messages)
    //this.setState({
    //  messages: [
    //    ...messages.slice(),
    //    message,
    //  ],
    //}, () => {
    //  // Included to support initial direction. Please remove upon completion
    //  console.log(messages)
    //})
  }
  const deleteMessage = (messageToDelete) => {
    setMessages(()=>{
      return messages.filter( messageData => messageData.message !== messageToDelete)
    })
  }
  const switchApp = () => {
    if(isApiStarted){
      console.log('stop')
      setApiStarted(false)
      api.stop()
    }else{
      console.log('start')
      setApiStarted(true)
      api.start()
    }
  }
  console.log(messages)
  return(
    <div>
      <Header/>
      <Button
        variant="contained"
        onClick={switchApp}
      >
        {isApiStarted ? 'Stop Messages' : 'Start Messages'}
      </Button>
      <Button
      variant="contained"
      onClick={() => setMessages([])}
      >
        Clear Messages
      </Button>
      <Notify message = {notify} setMessage = {setNotify}/>
      <MessageContainer messages = {messages} deleteMessage = {deleteMessage}/>
    </div>
  )

}

//class MessageList extends Component {
//  constructor(...args) {
//    super(...args)
//    this.state = {
//      messages: [],
//    }
//  }
//
//  api = new Api({
//    messageCallback: (message) => {
//      this.messageCallback(message)
//    },
//  })
//
//  componentDidMount() {
//    this.api.start()
//  }
//
//  messageCallback(message) {
//    const { messages } = this.state
//    this.setState({
//      messages: [
//        ...messages.slice(),
//        message,
//      ],
//    }, () => {
//      // Included to support initial direction. Please remove upon completion
//      console.log(messages)
//    })
//  }
//
//  renderButton() {
//    const isApiStarted = this.api.isStarted()
//    console.log(isApiStarted)
//    return (
//      <Button
//        variant="contained"
//        onClick={() => {
//          if (isApiStarted) {
//            this.api.stop()
//          } else {
//            this.api.start()
//          }
//          this.forceUpdate()
//        }}
//      >
//        {isApiStarted ? 'Stop Messages' : 'Start Messages'}
//      </Button>
//    )
//  }
//
//  render() {
//    return (
//      <div>
//        {this.renderButton()}
//      </div>
//    )
//  }
//}

export default MessageList
