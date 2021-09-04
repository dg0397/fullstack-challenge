import React from 'react'
import Button from 'components/Button'

const Notify = ({message,setMessage}) => {
    const clearMessage = () => {
        setMessage('')
    }
    return (
        <>
            {
                message 
                && (
                    <div id='notify'>
                        <p>{message}</p>
                        <Button handleClick = {clearMessage} text = 'Clear'/>
                    </div>
                )
            }
        </>
    )
}

export default Notify
