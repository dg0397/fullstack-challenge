import Context from "context/ContextMessages"
import { useContext } from "react"

export default function useGlobalMessages({type}){
    const {messages} = useContext(Context)
    const messagesToTheList = messages.filter(message => message.priority === type).reverse()

    return {messagesToTheList}
}