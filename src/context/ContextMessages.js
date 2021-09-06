import React,{useState,useMemo,useEffect} from "react";
//import Api from 'api'


const Context = React.createContext({})

export function MessagesContextProvider({children}){
    const [messages,setMessages] = useState([])
    const [notify,setNotify] = useState('')
    //const api = useMemo(()=> new Api({ messageCallback : (message) => messageCallback(message) }), []) 

    useEffect(()=> {
      new window.EventSource('http://localhost:4000/sse').onmessage = function (event) {
        const message = JSON.parse(event.data) 
        console.log(message)
        const {message:text,priority} = message
        if(priority === 1 ){
          setNotify(text)
        }
        setMessages(prevState => {
          return [...prevState,message]
        })
      }
      fetch("http://localhost:4000/start")
      console.log('stating app')
    },[])

    //const messageCallback = (message) => {
    //  const {message:text,priority} = message
    //  if(priority === 1 ){
    //    setNotify(text)
    //  }
    //  setMessages(prevState => {
    //    console.log('Epale')
    //    return [...prevState,message]
    //  })
    //}

    return (
        <Context.Provider value={{messages,setMessages,notify,setNotify}}> 
            {children}
        </Context.Provider>
    )
}

export default Context