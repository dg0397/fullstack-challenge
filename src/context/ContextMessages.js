import React, { useState, useEffect } from 'react'
import apiServices from 'services'

const Context = React.createContext({})

export function MessagesContextProvider ({ children }) {
  const [messages, setMessages] = useState([])
  const [notify, setNotify] = useState('')

  useEffect(() => {
    Promise.resolve(
      typeof window.EventSource !== 'undefined' ? window.EventSource : import('event-source-polyfill')
    ).then(() => {
      new window.EventSource('http://localhost:4000/sse').onmessage = function (event) {
        const message = JSON.parse(event.data)
        const { message: text, priority } = message
        if (priority === 1) {
          setNotify(text)
        }
        setMessages(prevState => {
          return [...prevState, message]
        })
      }
    }).then(() => {
      apiServices.startApi()
    })
    console.log('stating app')
  }, [])

  return (
    <Context.Provider value={{ messages, setMessages, notify, setNotify }}>
      {children}
    </Context.Provider>
  )
}

export default Context
