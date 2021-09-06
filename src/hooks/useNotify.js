import Context from 'context/ContextMessages'
import {useEffect, useContext} from 'react'

const useNotify = () => {
    const {notify,setNotify} = useContext(Context)
    const TIME = 2

    useEffect(()=>{
      if(notify){
        const t = window.setTimeout( () => setNotify('') ,TIME*1000)
        for(let i = 0; i< t ; i++){
          clearTimeout(i)
        }
      }
    },[notify])

    const updateNotify = (message) => setNotify(message)
    
    return {notify,updateNotify}
}

export default useNotify
