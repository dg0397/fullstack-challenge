import React from 'react'
//import Api from 'api'

import { MessagesContextProvider } from 'context/ContextMessages'


import Header from 'components/Header/Header'
import MessageContainer from 'components/MessageContainer/MessageContainer'
import Notify from 'components/Notify/Notify'
import ButtonsContainer from 'components/ButtonsContainer/ButtonsContainer'

import 'App.css'


const MessageList = () => {
  //const [messages,setMessages] = useState([])
  //const [isApiStarted,setApiStarted] = useState(true)
  //const [notify,setNotify] = useState('')
  //const api = useMemo(()=> new Api({ messageCallback : (message) => messageCallback(message) }), []) 
//
  //useEffect(()=> {
  //  api.start()
  //  console.log('stating app')
  //},[])
//
  //useEffect(()=>{
  //  if(notify){
  //    setTimeout(() => setNotify(''), 20000000)
  //  }
  //},[notify])
//
  //const messageCallback = (message) => {
  //  const {priority} = message;
  //  if(priority === 1){
  //    setNotify(message.message)
  //  }
  //  setMessages(prevState => {
  //    return [...prevState,message]
  //  })
  //}
  //const deleteMessage = (messageToDelete) => {
  //  setMessages(()=>{
  //    return messages.filter( messageData => messageData.message !== messageToDelete)
  //  })
  //}
  //const switchApp = () => {
  //  if(isApiStarted){
  //    console.log('stop')
  //    setApiStarted(false)
  //    api.stop()
  //  }else{
  //    console.log('start')
  //    setApiStarted(true)
  //    api.start()
  //  }
  //}
  return(
    <div id = 'app-container'>
      <Header/>
      <MessagesContextProvider>
        <ButtonsContainer />
        <Notify />
        <MessageContainer/>
      </MessagesContextProvider>
    </div>
  )

}

export default MessageList
