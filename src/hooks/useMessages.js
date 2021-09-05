import { useContext,useState } from "react"
import Context from "context/ContextMessages"

export default function useMessages(){
    const {messages,setMessages,api} = useContext(Context)
    const [isApiStarted,setApiStarted] = useState(true)
    
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
    const deleteAllMessages = () => setMessages([])

      

    return {switchApp,deleteMessage,isApiStarted,deleteAllMessages}
}