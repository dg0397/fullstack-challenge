import { useContext, useState } from 'react'
import Context from 'context/ContextMessages'
import apiServices from 'services'

export default function useMessages () {
  const { messages, setMessages } = useContext(Context)
  const [isApiStarted, setApiStarted] = useState(true)

  const deleteMessage = (messageToDelete) => {
    setMessages(() => {
      return messages.filter(messageData => messageData.message !== messageToDelete)
    })
  }
  const switchApp = () => {
    if (isApiStarted) {
      setApiStarted(false)
      apiServices.turnOfApi()
    } else {
      setApiStarted(true)
      apiServices.startApi()
    }
  }
  const deleteAllMessages = () => setMessages([])

  return { switchApp, deleteMessage, isApiStarted, deleteAllMessages }
}
