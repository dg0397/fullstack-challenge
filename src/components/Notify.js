import React from 'react'

const Notify = ({message,setMessage}) => {
    const cleatMessage = () => {
        setMessage('')
    }
    return (
        <>
            {
                message 
                && (
                    <div>
                        <p>{message}</p>
                        <button onClick = {cleatMessage}>Clear</button>
                    </div>
                )
            }
        </>
    )
}

export default Notify
