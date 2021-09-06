import { useContext,useState } from "react"
import Context from "context/ContextMessages"

export default function useMessages(){
    const {messages,setMessages} = useContext(Context)
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
        fetch("http://localhost:4000/end")
      }else{
        console.log('start')
        setApiStarted(true)
        fetch("http://localhost:4000/start")
      }
    }
    const deleteAllMessages = () => setMessages([])

      

    return {switchApp,deleteMessage,isApiStarted,deleteAllMessages}
}